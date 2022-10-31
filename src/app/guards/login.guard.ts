import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      const token = localStorage.getItem('token');
      // if (token) {
      //   const isExpired = this.authService.isExpiredToken(token)
      //   if (!isExpired) {
      //     this.router.navigate(['/'])
      //   }
      // }
      return true;
  }

}
