import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from "@angular/forms";
import { DoctorService } from 'src/app/service/doctor.service';
import { Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  isSubmitted = false;
  @Input() editedDoc: any;
  @Output() newItemEvent = new EventEmitter<object>();
  constructor(private fb: FormBuilder, private doctorService: DoctorService) { }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let change = changes[propName];
      let curVal = JSON.stringify(change.currentValue);
      let prevVal = JSON.stringify(change.previousValue);

      // console.log(curVal);
      // console.log(prevVal);
    }
  }
  ngOnInit(): void {
  }
  editForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]],
    email: [''],
    profilePhoto: ["../assets/doctor1.jpg"],
    specilaization: [''],
    fees: [''],
    address: [''],
    tel: [''],
    rate: [0],
    waitTime: [14]
  })

  onSubmit() {
    this.isSubmitted = true
    this.doctorService.editDoctor(this.editedDoc.id, this.editForm.value).subscribe((res) => {
      this.newItemEvent.emit(res);
    }, (err) => {
      console.log(err);
    })
    setTimeout(() => {
      this.isSubmitted = false;
    }, 3000)
  }
  get fs() { return this.editForm.controls }

}
