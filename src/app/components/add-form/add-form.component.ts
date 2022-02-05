import { Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from "@angular/forms";
import { DoctorService } from 'src/app/service/doctor.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  isSubmitted = false;
  @Output() newItemEvent = new EventEmitter<object>();
  constructor(private fb: FormBuilder, private doctorService:DoctorService) { }

  ngOnInit(): void {
  }
  addForm= this.fb.group({
    name:['',[Validators.required,Validators.minLength(4),Validators.maxLength(25)]],
    email:[''],
    profilePhoto:["../assets/doctor1.jpg"],
    specilaization:[''],
    fees:[''],
    address:[''],
    tel:[''],
    rate:[0],
    waitTime:[14]
  })
  onSubmit(){
    this.isSubmitted = true
    this.doctorService.addDoctor(this.addForm.value).subscribe((res)=>{
      this.newItemEvent.emit(res);
      console.log(res);
    },(err)=>{
      console.log(err);
    })
    setTimeout(()=>{
      this.isSubmitted = false;
    },3000)
  }

  get fs() { return this.addForm.controls }

}
