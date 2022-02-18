import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from "@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  isSubmitted = false;

  constructor(private userService:UserService, private fb:FormBuilder, private router:Router) {
   
  }

  myForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]],
    email: ['', [Validators.required, Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$')]],
    password: ['', [Validators.required, Validators.pattern('^(?![0-9_]{8,20})[0-9a-zA-Z_]{8,20}$')]],
    address: ['', Validators.required],
    tel: ['', [Validators.required, Validators.pattern('[0-9_]{8,15}')]],
  })

  ngOnInit() {
    this.userService.user.subscribe(u=>{
      // check to see if there is a logged in user
      if(u){
        // pass token to get logged in profile info request 
        this.userService.getProfileInfo(u.token);
        this.userService.userData.subscribe(userData=>{
          this.myForm.patchValue(userData)
        })
      }
    })
  }

  onSubmit(){
    this.isSubmitted = true
    // check to see if there is a logged in user
    if (this.myForm.valid) {
      this.userService.user.subscribe(u=>{
        if(u){
          // pass token to edit profile info request 
          this.userService.editUser(u.token ,this.myForm.value).subscribe(res=>{
            console.log(res)  
          })
          this.isSubmitted = false;
        }
        this.router.navigate(['/profile'])
      })
    }
  }

  onCancel(){
    this.router.navigate(['/profile'])
  }
  get fs() { return this.myForm.controls; }

}
