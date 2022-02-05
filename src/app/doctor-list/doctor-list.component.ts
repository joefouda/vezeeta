import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../service/doctor.service';
@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {
  doctors:any = []
  constructor(private doctoreService: DoctorService) {}
  getDoctors(){
    this.doctoreService.getAllDoctors().subscribe((res) =>{
      this.doctors = res;
    });
  }

  ngOnInit(): void {
    this.getDoctors()
  }

}
