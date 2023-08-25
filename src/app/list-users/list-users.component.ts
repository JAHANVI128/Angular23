import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private httpClient:HttpClient, private toastr:ToastrService){
    this.getAllUsers()
  }

  getAllUsers(){
    // let apiResponse:any = {}
    console.log("List User api called...");

    this.httpClient.get("https://demopass.onrender.com/getallusers").subscribe(resp => {
      this.apiResponse = resp
      // console.log(apiResponse);
      // console.log(apiResponse.data);
      this.users = this.apiResponse.data
    },err => {

    })
  }

  deleteUser(userId:string){
    // alert("Delete"+" => "+userId);
    this.httpClient.delete("https://demopass.onrender.com/deleteuser/"+userId).subscribe(resp => {
      this.getAllUsers();
      this.toastr.success("","User Removed",{
        timeOut:3000
      })
    })
  }

  viewUser(userId:string){

  }

  showDialog(userId:string){
    this.uId = userId
    this.httpClient.get("https://demopass.onrender.com/getuserbyid/"+userId).subscribe(resp => {
      // console.log(resp);
      this.data = resp
      this.firstName = this.data.data.firstName
      this.email = this.data.data.email
      this.visible = true
    })
  }
}
