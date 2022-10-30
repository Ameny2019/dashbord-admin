import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {


    if (localStorage.getItem("state") === "1") {
      console.log("true")
      return true;
    }
    else {
      this.router.navigateByUrl('')
      console.log("false")
      return false;
    }
  }

}
