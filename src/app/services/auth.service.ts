import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import jwt_decode from "jwt-decode";
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoginSubject = new BehaviorSubject<boolean>(this.isConnected());
  usernameSubject = new BehaviorSubject<string>('');
  emailSubject = new BehaviorSubject<string>('');
  roleSubject = new BehaviorSubject<string>('');

  constructor(private http:HttpClient, private router: Router) {
    if(this.isConnected()){
      this.loadDataFromToken();
    }
  }

  login(user:any){
    return this.http.post(`${environment.baseURL}/auth/login`,user)
  }

  logout() {
    return this.http.get(`${environment.baseURL}/auth/logout`)
  }

  setToken(token: string) {
    localStorage.setItem("token", token);
    this.isLoginSubject.next(true);
    this.loadDataFromToken();
  }

  loadDataFromToken(){
    const token = localStorage.getItem('token');
    if(token){
      const decoded:any= jwt_decode(token);
      this.usernameSubject.next(decoded?.username);
      this.emailSubject.next(decoded?.email);
      this.roleSubject.next(decoded?.role);
    }
  }

  private isConnected(): boolean {
    // check if token !=null && token !== undefined
    return !!localStorage.getItem('token');
  }

  logoutUser() {
    this.logout().subscribe(
      (response: any) => {
        this.clearUserData();
      },
      (error: any) => {
        this.clearUserData();
      });
  }

  clearUserData(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.isLoginSubject.next(false);
    this.usernameSubject.next('');
    this.emailSubject.next('');
    this.roleSubject.next('');
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

  isExpiredToken(token: string): boolean {
    const decoded:any= jwt_decode(token);
    return Math.floor(new Date().getTime()/1000)>=decoded.exp
  }
}
