import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { DoctorService } from 'src/app/doctor/doctor.service';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  auth:any;
  doctorInfo:any;
  constructor(private doctorService:DoctorService,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.doctorService.doctor.subscribe(doc=>{
      // check to see if there is a logged in doctor
      if(doc){
        // pass token to get logged in profile info request 
        this.doctorService.getProfileInfo(doc.token).subscribe(res=>{
          this.doctorInfo = res
          this.myForm.patchValue({
            name:this.doctorInfo.name,
            email:this.doctorInfo.email,
            specialization:this.doctorInfo.specialization,
            address:this.doctorInfo.address,
            tel:this.doctorInfo.tel,
            fees:this.doctorInfo.fees
          })
        })
      }
    })
  }
  editMode = false;
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
          this.myForm.patchValue({
            name:this.doctorInfo.name,
            email:this.doctorInfo.email,
            address:this.doctorInfo.address,
            tel:this.doctorInfo.tel
          })
          this.isSubmitted = false
          this.editMode = false
        }
      })
    }
  }
  get fs() { return this.myForm.controls; }

}
