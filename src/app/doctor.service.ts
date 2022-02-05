import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  doctors:any
  constructor() {
    this.doctors = [
      {
        id:1,
        name:'ahmed',
        profilePhoto:'../assets/doctor1.jpg',
        specilaization:'Dentistry',
        fees:200,
        address:'ismailia',
        tel:19913,
        rate:2,
        waitTime:14
      },
      {
        id:2,
        name:'fouda',
        profilePhoto:'../assets/doctor2.jpg',
        specilaization:'Family Medicine',
        fees:100,
        address:'cairo',
        tel:18812,
        rate:3,
        waitTime:10
      },
      {
        id:3,
        name:'mostafa',
        profilePhoto:'../assets/doctor3.jpg',
        specilaization:'Chest and Respiratory',
        fees:300,
        address:'alex',
        tel:16613,
        rate:5,
        waitTime:30
      }
    ]
   }
   getAllDoctors(){
     return this.doctors
   }

   getDoctor(id:number){
     return this.doctors.filter((ele:any)=>{
       return ele.id == id;
     })
   }
}
