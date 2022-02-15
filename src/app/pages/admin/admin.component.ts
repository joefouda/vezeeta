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
    });
  }

  ngOnInit(): void {
    this.getDoctors()
  }

}
