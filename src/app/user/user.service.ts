import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, tap } from 'rxjs';
import { User } from './auth/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //define behavior subject to keep information of logged in doctor (token)
  user = new BehaviorSubject<User | null>(null)
  constructor(private http: HttpClient,private router:Router) { }

  signUp(data:any){
    return this.http.post(`${environment.base_url}users/signUp`,data)
  }
 
  logIn(data:any){
    return this.http.post(`${environment.base_url}users/logIn`,data).pipe(tap((res:any)=>{
        const user = new User(res.token);

        // set my subject to logged in user info (token)
        this.user.next(user);

        // keep my token in local storage to keep it presistence on hard reload
        localStorage.setItem('token',user.token)
    }))
  }

  logOut(){
    // set my subject to null when user logout
    this.user.next(null);
    localStorage.clear()
    this.router.navigate(['/doctors'])
  }

  autoLogin(){
    // get my token from local storage to reset my subject 
    const userToken = localStorage.getItem('token')
    if(!userToken){
      return
    }

    // create new user with token found in local storage
    const loggedIn = new User(userToken);
    
    // reset my subject to user info(token) exists on local storage 
    this.user.next(loggedIn)
  }
  getAllUsers() {
    return this.http.get(`${environment.base_url}users`)
  }

  getProfileInfo(token:string) {
    return this.http.get(`${environment.base_url}users/profile`,{
      headers: {'authorization':token}
   })
  }

  editUser(token:string,data:any){
    return this.http.patch(`${environment.base_url}users`,data,{
      headers: {'authorization':token}
   })
  }

  deleteUser(id: any) {
    return this.http.delete(`${environment.base_url}users/${id}`)
  }
}
