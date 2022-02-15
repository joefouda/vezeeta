import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from "@angular/forms";
import { DoctorService } from 'src/app/service/doctor.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Doctor } from 'src/app/auth/doctor.model';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  auth:any;
  constructor(private fb: FormBuilder,private doctorDervice:DoctorService, private router:Router) { }
  isSubmitted = false;

  ngOnInit(): void {
  }
  myForm= this.fb.group({
    username:['',[Validators.required,Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$')]],
    password:['',Validators.required],
  })

  onSubmit(){
    this.isSubmitted = true
    if(this.myForm.status !== 'INVALID'){
      this.doctorDervice.logIn(this.myForm.value).subscribe((res:any)=>{
        // display error message if email or password are incorrect
        if(res.message == "invalid username or password"){
          this.auth = res.message;
          setTimeout(()=>{
            this.auth = undefined 
          },3000)
        } else {
          // navigate to home page if user exist
          this.router.navigate(['home'])
        }
      }, (err)=>{
        console.log(err);
      });
    }
  }
  get fs() { return this.myForm.controls; }
}
