import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: LoginComponent, private router: Router, private toast :NgToastService ) {}
  canActivate(){
    if (this.auth.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/coin-list']);
      return false;
    }
  }
  
  
}
