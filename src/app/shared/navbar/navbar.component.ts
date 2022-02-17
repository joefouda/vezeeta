import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/doctor/doctor.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  isAuthenticated = false;
  constructor(private userService:UserService, private doctorService:DoctorService, private url:LocationStrategy) {}

  ngOnInit(){
    if(this.userRole()){
      this.userService.user.subscribe(u=>{
        // user is authenticated if there is a token
        this.isAuthenticated = u ? true: false; 
      })
    }
    if(this.doctorRole()){
      this.doctorService.doctor.subscribe(u=>{
        // doctor is authenticated if there is a token
        this.isAuthenticated = u ? true: false; 
      })
    }
  }
  logOut(){
    if(this.userRole()){
      this.userService.logOut()
    }
    if(this.doctorRole()){
      this.doctorService.logOut()
    }
  }

  userRole(){
    return (!this.adminRole() && !this.doctorRole())?true:false
  }

  doctorRole(){
    return (this.url.path() == '/doctors' || this.url.path() == '/doctors/sign-up' || this.url.path() == '/doctors/profile')?true:false;
  }

  adminRole(){
    return (this.url.path() == '/admin-dashboard' || this.url.path() == '/admin-dashboard/users-list' || this.url.path() == '/admin-dashboard/doctors-list')?true:false;
  }
}
