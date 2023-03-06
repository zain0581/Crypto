import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgToastService } from 'ng-angular-popup';

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
  constructor( private fb:FormBuilder, private auth:ApiService,private rout:Router,private toast: NgToastService ){}

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
          next:(er)=>{
           this.toast.success({detail:"Success Message",summary:"Login successfully",duration:5000})
           this.loginform.reset();
           this.rout.navigate(['dashboard'])
        
         
      },
          error:(er)=>{
            console.log(er&& er.message);
       this.toast.error({detail:"Try Again",summary:"Login Failed",duration:5000})
      
      
      }
          })
          
      
      
        }
        else{
          
          //throw the erroe using toaster and with required fields
          //calling the method her::
          this.validateallformfields(this.loginform);
          this.toast.warning({detail:"WARNING",summary:"Miss something?",duration:5000})
       
        }
      
      }
     
      // onLogin() {
      //   if (this.loginform.valid) {
      //     const userObj = {
      //       Email: this.loginform.controls['Email'].value,
      //       Password: this.loginform.controls['Password'].value
      //     };
      //     this.auth.login(userObj)
      //         .subscribe({
      //         next:(S)=>{
      //          alert(S.message)
      //         //  this.loginform.reset();
      //         //  this.rout.navigate(['dashboard'])
             
      //     },
      //         error:(er)=>{
      //           console.log(er);
      //           alert(er);
          
      //     //
      //     }
      //         });
          // this.http.post('/api/user/authenticate', userObj)
          //   .subscribe(
          //     response => {
          //       console.log(response);
          //       // Handle success response
          //     },
          //     error => {
          //       console.log(error);
          //       // Handle error response
          //     }
          //   );
        //}
        //}
      
    






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
