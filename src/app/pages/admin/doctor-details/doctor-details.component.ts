import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from '../../../service/doctor.service';
import { faPercent,faIdBadge,faMapMarker,faMoneyBillWaveAlt,faPhoneAlt,faSpinner } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.scss']
})
export class DoctorDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private doctoreService: DoctorService) {}
  faPercent = faPercent;
  faIdBadge = faIdBadge;
  faMapMarker = faMapMarker;
  faMoneyBillWaveAlt = faMoneyBillWaveAlt;
  faPhoneAlt = faPhoneAlt;

  doctor:any;
  doctorId:any;
  getDetails(id:number){
    this.doctoreService.getDoctorDetails(id).subscribe((res)=>{
      this.doctor = res
    });
  }
  ngOnInit(): void {
    this.doctorId = this.route.snapshot.params['dId'];
    this.getDetails(this.doctorId);
  }

}
