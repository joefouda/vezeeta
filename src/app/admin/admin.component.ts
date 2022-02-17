import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DoctorService } from 'src/app/doctor/doctor.service';
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

  

  ngOnInit(): void {
  }

}
