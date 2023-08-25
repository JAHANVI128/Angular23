import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // x:number=100

  email:string=""
  password:string=""

  constructor(private httpClient:HttpClient ,private toastr:ToastrService ,private router:Router){

  }

  login(){
    console.log("Email => ",this.email);
    console.log("Password => ",this.password);
    
    let data = {
      "email":this.email,
      "password":this.password
    }

    // let x:any = {
    //   "msg":"",
    //   "rcode":0
    // }

    let x:any ={}

    this.httpClient.post("https://demopass.onrender.com/public/login",data).subscribe(resp => {

      // console.log(data);
      x = resp
      if(x.rcode == -9){
        this.toastr.error(x.msg,"",{timeOut:3000})
      }else if (x.rcode == -9){
        this.toastr.success("Login done","",{timeOut:3000})
        this.router.navigateByUrl("/home")
      }
    },err => {

    })
  }
}
