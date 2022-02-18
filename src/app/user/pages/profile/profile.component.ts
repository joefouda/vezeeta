import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userInfo:any;
  constructor(private userService:UserService) {
   }

  ngOnInit(): void {
    this.userService.user.subscribe(u=>{
      // check to see if there is a logged in user
      if(u){
        // pass token to get logged in profile info request 
        this.userService.getProfileInfo(u.token)
        this.userService.userData.subscribe(userData=>{
          this.userInfo = userData;
        })
      }
    })
  }
}
