import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //Dtatypes and the values
  type:string = "password";
  istext:boolean = false;
  eyeIcon:string="fa-eye-slash";

//loginform
  loginform!:FormGroup;
  constructor( private fb:FormBuilder ){}

  //This is method that requries you to input somthing in password fied othervise it vil give error
  ngOnInit():void{
  this.loginform = this.fb.group(
    {
      username:['',Validators.required],
      Password:['',Validators.required]
    }
  )
}


//This is code for eye icon to hidePassword
hideshowpass(){
  this.istext=!this.istext;
  this.istext ? this.eyeIcon="fa-eye" : this.eyeIcon="fa-eye-slash";
  this.istext ? this.type="text": this.type="password";
    }


    //this is a method for login button if ther is no vaæe in input field it will give a alert message othervise we can continue
    onLogin(){
      if (this.loginform.valid){
        console.log(this.loginform.value)
      }
      else{
        alert("Your Form is Invalid")
      }


    }
}
