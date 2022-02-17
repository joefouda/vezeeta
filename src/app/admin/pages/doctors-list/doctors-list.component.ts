import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DoctorService } from 'src/app/doctor/doctor.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss']
})
export class DoctorsListComponent implements OnInit {
  doctors:any = [];
  name:any;
  constructor(private doctorService:DoctorService,private _modalService: NgbModal) { }

  // get all doctors to display them for the admin
  getDoctors(){
    this.doctorService.getAllDoctors().subscribe(res => {
      this.doctors = res
      console.log(res)
    })
  }

  // delete doctor by id
  deleteDoctor(id:any,name:string,content:any){
    this.name = name;
    // this.doctorService.deleteDoctor(id).subscribe(()=>{this.getDoctors()})
    this._modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      // User Click on OK button
      this.doctorService.deleteDoctor(id).subscribe(res => {
        this.getDoctors();
      }); 
    },()=>{
      // user click on cancel
    });
  }

  ngOnInit(): void {
    this.getDoctors()
  }

}
