import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-signup',
  templateUrl: './reactive-signup.component.html',
  styleUrls: ['./reactive-signup.component.css']
})
export class ReactiveSignupComponent {

  myForm : FormGroup

  constructor(){
    this.myForm = new FormGroup({
      firstName : new FormControl("",Validators.required),
      // email : new FormControl("",[Validators.required, Validators.email]),
      email : new FormControl("",[Validators.required, this.emailVaild]),
      password : new FormControl("",[Validators.required, Validators.minLength(8)])
    })
  }

  saveUser(){
    console.log(this.myForm.value);
    console.log(this.myForm.valid);
  }

  emailVaild(control:AbstractControl){

    // console.log(control.value);

    if(control.value.endsWith("@gmail.com")){

      return{
        emailInvalid : false
      }
    }else{
      return{
        emailInvalid : true
      }
    }

  }

}
