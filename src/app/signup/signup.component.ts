import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {



  type:string = "password";
  istext:boolean = false;
  eyeIcon:string="fa-eye-slash";


  signupform!:FormGroup;
  /**
   *
   */
  constructor(private fb:FormBuilder) {}
  ngOnInit():void{
    this.signupform = this.fb.group(
      {
  
        FirstName:['',Validators.required],
        LastName:['',Validators.required],
        UserName:['',Validators.required],
        Email:['',Validators.required],
        Password:['',Validators.required]
       
      }
    )
  
    
  }


  hideshowpass(){
    this.istext=!this.istext;
    this.istext ? this.eyeIcon="fa-eye" : this.eyeIcon="fa-eye-slash";
    this.istext ? this.type="text": this.type="password";

}


onSignup(){
  if(this.signupform.valid){
    console.log(this.signupform.value) }
    else{
      alert("Invalid Form")
    }
}


}
