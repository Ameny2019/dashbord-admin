import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

name:any
email: any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log('here navbar')
    var user = JSON.parse(localStorage.getItem("user"));
    console.log("name is : ",user.nom)
    this.name=user;
    console.log("email is : ",user.email)
    this.email=user;
  }

  logout(){
    localStorage.removeItem("state");
    console.log("here navigate vers home")
    this.router.navigateByUrl('');
  }

}

