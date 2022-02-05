import { Injectable } from '@angular/core';
// import { doctors } from './doctors-array';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  constructor(private http: HttpClient) { }
  getAllDoctors() {
    return this.http.get(`${environment.base_url}doctors`)
  }

  getDoctor(id: number) {
    return this.http.get(`${environment.base_url}doctors/${id}`)
  }

  deleteDoctor(id: number) {
    return this.http.delete(`${environment.base_url}doctors/${id}`)
  }
  
  addDoctor(data:any){
    console.log(data)
    return this.http.post(`${environment.base_url}doctors`,data)
  }

  editDoctor(id:number,data:any){
    return this.http.put(`${environment.base_url}doctors/${id}`,data)
  }

}
