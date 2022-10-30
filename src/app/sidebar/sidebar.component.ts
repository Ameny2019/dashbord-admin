import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  role:any=localStorage.getItem('role')  
  
  constructor() { }

  ngOnInit(): void {

    // console.log('here navbar')
    // var user = JSON.parse(localStorage.getItem("user"));
    // console.log("name is : ",user.role)
    // this.role=user.role;

    console.log("role :",this.role);
    

  }

}
