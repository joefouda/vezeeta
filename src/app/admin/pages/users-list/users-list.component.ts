import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users:any = [];
  name:any;
  constructor(private userService:UserService,private _modalService: NgbModal) { }

//   // get all doctors to display them for the admin
  getUsers(){
    this.userService.getAllUsers().subscribe(res => {
      this.users = res
      console.log(res)
    })
  }

  // delete user by id
  deleteUser(id:any,name:string,content:any){
    this.name = name;
    this._modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      // User Click on OK button
      this.userService.deleteUser(id).subscribe(res => {
        this.getUsers();
      }); 
    },()=>{
      // user click on cancel
    });
  }
ngOnInit(): void {
    this.getUsers()
}

}
