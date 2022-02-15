import { Component, OnInit } from '@angular/core';
import { Router,NavigationStart, Event as NavigationEvent } from '@angular/router';
import { throwError } from 'rxjs';
import { DoctorService } from './service/doctor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  auth:any
  event$:any
  constructor(private router: Router,private doctorService:DoctorService) {}
  url = this.router.url

  // check wither to display navbar or not
  shouldDisplayNavBar(){
    //return false if page is not found
    return !this.url.includes('/page-not-found');
  }

  ngOnInit(): void {
      // presiste in website if token is available
      this.doctorService.autoLogin()
  }
 
}
