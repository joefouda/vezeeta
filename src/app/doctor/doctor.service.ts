import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, tap } from 'rxjs';
import { Doctor } from './auth/doctor.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  //define behavior subject to keep information of logged in doctor (token)
  doctor = new BehaviorSubject<Doctor | null>(null)
  constructor(private http: HttpClient,private router:Router) { }

  signUp(data:any){
    return this.http.post(`${environment.base_url}doctors/signUp`,data)
  }
 
  logIn(data:any){
    return this.http.post(`${environment.base_url}doctors/logIn`,data).pipe(tap((res:any)=>{
        const doctor = new Doctor(res.token);

        // set my subject to logged in doctor info (token)
        this.doctor.next(doctor);

        // keep my token in local storage to keep it presistence on hard reload
        localStorage.setItem('token',doctor.token)
    }))
  }

  logOut(){
    // set my subject to null when doctor logout
    this.doctor.next(null);
    localStorage.clear()
    this.router.navigate(['/doctors'])
  }

  autoLogin(){
    // get my token from local storage to reset my subject 
    const doctorToken = localStorage.getItem('token')
    if(!doctorToken){
      return
    }

    // create new doctor with token found in local storage
    const loggedIn = new Doctor(doctorToken);
    
    // reset my subject to doctor info(token) exists on local storage 
    this.doctor.next(loggedIn)
  }
  getAllDoctors() {
    return this.http.get(`${environment.base_url}doctors`)
  }

  getDoctorDetails(id: any) {
    return this.http.get(`${environment.base_url}doctors/${id}`)
  }

  getProfileInfo(token:string) {
    return this.http.get(`${environment.base_url}doctors/profile`,{
      headers: {'authorization':token}
   })
  }

  editDoctor(token:string,data:any){
    return this.http.patch(`${environment.base_url}doctors`,data,{
      headers: {'authorization':token}
   })
  }

  deleteDoctor(id: any) {
    return this.http.delete(`${environment.base_url}doctors/${id}`)
  }
}
