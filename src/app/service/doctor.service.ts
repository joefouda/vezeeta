import { Injectable } from '@angular/core';
import { doctors } from './doctors-array';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  constructor() {}
   getAllDoctors(){
     return doctors
   }

   getDoctor(id:number){
     return doctors.filter((ele:any)=>{
       return ele.id == id;
     })
   }
}
