import { Component, Input, OnInit } from '@angular/core';
import { faPercent,faIdBadge,faMapMarker,faMoneyBillWaveAlt,faPhoneAlt,faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.scss']
})
export class DoctorCardComponent implements OnInit {
  @Input() doctorsList:any;
  constructor(private route:Router) { }
  faPercent = faPercent;
  faIdBadge = faIdBadge;
  faMapMarker = faMapMarker;
  faMoneyBillWaveAlt = faMoneyBillWaveAlt;
  faPhoneAlt = faPhoneAlt;
  loading = false;
  placeholder = 'more Details';
  faSpinner = faSpinner
  getData(dId:number){
    this.route.navigate(['doctor-details',dId])
  }
  ngOnInit(): void {
  }

}
