import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import{ApiService} from'../services/api.service';
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
  constructor( private fb:FormBuilder, private auth:ApiService,private rout:Router ){}

  //This is method that requries you to input somthing in password fied othervise it vil give error
  ngOnInit():void{
  this.loginform = this.fb.group(
    {
      Email:['',Validators.required],
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
        if(this.loginform.valid){
          //send the obj to database
          console.log(this.loginform.value)
      
          this.auth.login(this.loginform.value)
          .subscribe({
          next:(S)=>{
            alert("Login nSuccess")
           this.loginform.reset();
           this.rout.navigate(['dashboard'])
          
         
      },
          error:(er)=>{
            console.log(er&& er.message);
            alert("your Email or Password is incorrect")
      
      
      }
          })
          
      
      
        }
        else{
          
          //throw the erroe using toaster and with required fields
          //calling the method her::
          this.validateallformfields(this.loginform);
          alert("your form is invalid")
        }
      
      }
 
      
    




      private validateallformfields(formGroup: FormGroup<any>) {
        Object.keys(formGroup.controls).forEach(field=>{
          const control = formGroup.get(field);
          if(control instanceof FormControl){
            control.markAsDirty({onlySelf:true});
          }
          else if (control instanceof FormGroup){
            this.validateallformfields(control)
          }
        })
        
        
        }
      
}
