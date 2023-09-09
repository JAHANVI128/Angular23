import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {

  apiResponse:any = {}
  users:Array<any> = []
  firstName = ""
  email = ""
  uId = ""
  visible:boolean = false
  data:any = ""

  constructor(private userService:UserService, private toastr:ToastrService, private router:Router){
    this.getAllUsers()
  }

  getAllUsers(){
    // let apiResponse:any = {}
    // console.log("List User api called...");

    // this.httpClient.get("https://demopass.onrender.com/getallusers").subscribe(resp => {
    //   this.apiResponse = resp
      // console.log(apiResponse);
      // console.log(apiResponse.data);
    //   this.users = this.apiResponse.data
    // },err => {

    // })

    this.userService.getAllUsers().subscribe(resp => {
      this.apiResponse = resp
      this.users = this.apiResponse.data
    },err => {

    })
  }

  deleteUser(userId:string){
    // alert("Delete"+" => "+userId);
    // this.httpClient.delete("https://demopass.onrender.com/deleteuser/"+userId).subscribe(resp => {
    //   this.getAllUsers();
    //   this.toastr.success("","User Removed",{
    //     timeOut:3000
    //   })
    // })

    this.userService.deleteUser(userId).subscribe(resp => {
      this.getAllUsers();
      this.toastr.success("","User Removed",{
        timeOut:3000
      })
    })
  }

  viewUser(userId:string){

  }

  showDialog(userId:string){
    // this.uId = userId
    // this.httpClient.get("https://demopass.onrender.com/getuserbyid/"+userId).subscribe(resp => {
    //   // console.log(resp);
    //   this.data = resp
    //   this.firstName = this.data.data.firstName
    //   this.email = this.data.data.email
    //   this.visible = true
    // })

    this.userService.showdialog(userId).subscribe(resp => {
      this.data = resp
      this.firstName = this.data.data.firstName
      this.email = this.data.data.email
      this.visible = true
    })
  }

  editUser(userId:String){
    // alert(userId);
    this.router.navigateByUrl("/edituser/"+userId)
  }

}
