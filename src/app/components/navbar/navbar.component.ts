import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  isAuthenticated = false;
  constructor(private doctorService:DoctorService) { }

  ngOnInit(){
    this.doctorService.doctor.subscribe(doc=>{
      // doctor is authenticated if there is a token
      this.isAuthenticated = doc ? true: false; 
    })
  }
  logOut(){
    this.doctorService.logOut()
  }
}
