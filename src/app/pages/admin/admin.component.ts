import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DoctorService } from 'src/app/service/doctor.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  doctors:any = [];
  doctor:any = {};
  name:any;
  constructor(private doctorService:DoctorService,private _modalService: NgbModal) { }


  getDoctors(){
    this.doctorService.getAllDoctors().subscribe(res => {
      this.doctors = res
      console.log(res)
    })
  }
  deleteDoctor(id:any,name:string,content:any){
    this.name = name;
    // this.doctorService.deleteDoctor(id).subscribe(()=>{this.getDoctors()})
    this._modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      // User Click on OK button
      this.doctorService.deleteDoctor(id).subscribe(res => {
        this.getDoctors();
      }); 
    });
  }
  addDoctor(addForm:any){
    this._modalService.open(addForm, {ariaLabelledBy: 'modal-basic-title'})
  }

  editDoctor(id:any,editForm:any){
    this.doctorService.getDoctor(id).subscribe(res=>{
      this.doctor = res;
    })
    this._modalService.open(editForm, {ariaLabelledBy: 'modal-basic-title'})
  }

  editItem(newItem: any) {
    this.doctors.map((ele:any)=>{
      if(ele.id == newItem.id){
        Object.assign(ele,newItem)
      }
    });
  }

  addItem(newItem: object) {
    this.doctors.push(newItem);
  }

  ngOnInit(): void {
    this.getDoctors()
  }

}
