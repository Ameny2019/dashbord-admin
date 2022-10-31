import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  user: any;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    this.authService.login(this.formLogin.value).subscribe((res: any) => {
      this.authService.setToken(res?.token);
      this.router.navigateByUrl('/home');
      this.toastService.success('Bienvenue');
    }, (error: any) => {
      this.toastService.error(`${error?.error?.message}`);
    });
  }

}
