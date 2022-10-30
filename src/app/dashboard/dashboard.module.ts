import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    ListDemandeComponent,
    AjoutDemandeComponent,
    UpdateEstampComponent,
    UpdateEfleurComponent,
    ProductComponent,
    AgentComponent,
    ClientComponent,
    AjoutUtilisateurComponent,
    ListcommandesComponent,
    AgentvalidationComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class DashboardModule { }
