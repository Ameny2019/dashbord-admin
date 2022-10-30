import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListDemandeComponent } from './components/demandeProduit/list-demande/list-demande.component';
import { AjoutDemandeComponent } from './components/demandeProduit/ajout-demande/ajout-demande.component';
import { UpdateEstampComponent } from './components/estamp/update-estamp/update-estamp.component';
import { UpdateEfleurComponent } from './components/efleur/update-efleur/update-efleur.component';
import { ProductComponent } from './components/product/product.component';
import { AgentComponent } from './components/utilisateur/agent/agent.component';
import { ClientComponent } from './components/utilisateur/client/client.component';
import { AjoutUtilisateurComponent } from './components/utilisateur/ajout-utilisateur/ajout-utilisateur.component';
import { ListcommandesComponent } from './components/listcommandes/listcommandes.component';
import { AgentvalidationComponent } from './components/utilisateur/agentvalidation/agentvalidation.component';

@NgModule({
  declarations: [
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
