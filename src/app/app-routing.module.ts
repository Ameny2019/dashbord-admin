import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'home',
    component : HomeComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
