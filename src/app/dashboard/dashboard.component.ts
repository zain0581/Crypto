import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  private loggedInUser: any;

  constructor( private router: Router){}
  logout() {
    // Here you can remove the user data from the local variable and redirect to the login page
    this.loggedInUser = null;
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
  // isLoggedIn() : boolean {
  //   // Here you can check if the user is logged in by checking if the local variable has a value
  //   return this.loggedInUser != null;
  // }

  
}
