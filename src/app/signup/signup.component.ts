import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  email = '';
  fname = '';
  password = '';

  constructor(private toastr: ToastrService, private router: Router,private httpClient:HttpClient) {}

  signup() {
    console.log('First name : ', this.fname);
    console.log('Email : ', this.email);
    console.log('Password : ', this.password);

    let data = {
      "email":this.email,
      "firstName":this.fname,
      "password":this.password
    }

    this.httpClient.post("https://demopass.onrender.com/signup",data).subscribe(resp => {
      console.log(resp);
    },error => {
      console.log(error);
    });
    this.toastr.success('Signup Done', '', { timeOut: 4000 });
    this.router.navigateByUrl('/login');
  }
}
