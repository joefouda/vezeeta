import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/doctor/doctor.service';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  isSubmitted = false;
  myForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]],
    email: ['', [Validators.required, Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$')]],
    password: ['', [Validators.required, Validators.pattern('^(?![0-9_]{8,20})[0-9a-zA-Z_]{8,20}$')]],
    specialization: ['', Validators.required],
    address: ['', Validators.required],
    tel: ['', [Validators.required, Validators.pattern('[0-9_]{8,15}')]],
    fees: ['', [Validators.required, Validators.pattern('[0-9_]{1,10}')]]
  })

  constructor(private doctorService:DoctorService,private fb: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    // check to see if there is a logged in doctor
    this.doctorService.doctor.subscribe(doc=>{
      // pass token to get logged in profile info request 
      if(doc){
        this.doctorService.getProfileInfo(doc.token)
        this.doctorService.doctorData.subscribe(doctorData=>{
          this.myForm.patchValue(doctorData)
        })
      }
    })
  }

  onSubmit(){
    this.isSubmitted = true
    // check to see if there is a logged in doctor
    if (this.myForm.status !== 'INVALID') {
      this.doctorService.doctor.subscribe(doc=>{
        if(doc){
          // pass token to edit profile info request 
          this.doctorService.editDoctor(doc.token ,this.myForm.value).subscribe(res=>{
            console.log(res)
          })
          this.isSubmitted = false
          this.router.navigate(['/doctors/profile'])
        }
      })
    }
  }

  onCancel(){
    this.router.navigate(['/doctors/profile'])
  }
  get fs() { return this.myForm.controls; }

}
