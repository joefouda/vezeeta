import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DoctorService } from './doctor/doctor.service';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private userService:UserService, private doctorService:DoctorService,private urlTest:LocationStrategy) {}

  // check wither to display navbar or not
  shouldDisplayNavBar(){
    //return false if page is not found
    return this.urlTest.path() != '/page-not-found'
  }

  ngOnInit(): void {
      // presiste in website if token is available
      this.userService.autoLogin()
      this.doctorService.autoLogin()
  }
 
}
