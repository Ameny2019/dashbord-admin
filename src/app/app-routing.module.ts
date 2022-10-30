import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  // {
  //   path: 'home',
  //   canActivate: [AuthGuard],
  //   loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
