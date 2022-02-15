import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  auth:any;
  doctorInfo:any;
  constructor(private doctorService:DoctorService) { }

  ngOnInit(): void {
    this.doctorService.doctor.subscribe(doc=>{
      // check to see if there is a logged in doctor
      if(doc){
        // pass token to get logged in profile info request 
        this.doctorService.getProfileInfo(doc.token).subscribe(res=>{
          this.doctorInfo = res
        })
      }
    })
  }

}
