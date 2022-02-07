import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  isSubmitted = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  myForm= this.fb.group({
    Name:['',[Validators.required,Validators.minLength(4),Validators.maxLength(25)]],
    email:[''],
    phone:[''],
    address:this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    })
  })
  onSubmit(){
    this.isSubmitted = true
    console.log(this.myForm.value);

    setTimeout(()=>{
      this.isSubmitted = false;
    },3000)
  }
  get fs() { return this.myForm.controls; }

}
