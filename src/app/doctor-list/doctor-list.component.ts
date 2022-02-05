import { Component, Input, OnInit } from '@angular/core';
import { DoctorService } from '../service/doctor.service';
@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {
  doctors:any
  constructor(private doctoreService: DoctorService) {}
  getDoctors():void{
    this.doctors = this.doctoreService.getAllDoctors();
  }

  ngOnInit(): void {
    this.getDoctors()
  }

}
