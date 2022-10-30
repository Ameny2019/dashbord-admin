import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin:FormGroup;
  user:any;

  constructor(private router:Router,
              private formBuilder:FormBuilder,
              private authService:AuthService,
    ) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login(){
    console.log("login : ",this.formLogin.value);

      this.authService.login(this.formLogin.value).subscribe((res:any) => {
        console.log("res is :",res.user);


        if(res.success ){
          localStorage.setItem('state','1');
          localStorage.setItem('user',JSON.stringify(res.user))
          localStorage.setItem('role',res.user.role)
          localStorage.setItem('token',res.token)
          this.router.navigateByUrl('/home');}
    })

  }

}
