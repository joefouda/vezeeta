import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from "@angular/forms";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  isSubmitted = false;

  ngOnInit(): void {
  }
  myForm= this.fb.group({
    email:[''],
    password:[''],
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
