import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AjoutDemandeComponent } from './components/demandeProduit/ajout-demande/ajout-demande.component';
import { ListDemandeComponent } from './components/demandeProduit/list-demande/list-demande.component';
import { UpdateEfleurComponent } from './components/efleur/update-efleur/update-efleur.component';
import { UpdateEstampComponent } from './components/estamp/update-estamp/update-estamp.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { ProductComponent } from './components/product/product.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import { AjoutUtilisateurComponent } from './components/utilisateur/ajout-utilisateur/ajout-utilisateur.component';
import { AgentComponent } from './components/utilisateur/agent/agent.component';
import { ClientComponent } from './components/utilisateur/client/client.component';
import { ListcommandesComponent} from './components/listcommandes/listcommandes.component';
import { AgentvalidationComponent } from './components/utilisateur/agentvalidation/agentvalidation.component';



const routes: Routes = [
  {path:"home",component:HomeComponent,canActivate:[AuthGuard], children:[
    {path:"listDemande",component:ListDemandeComponent},
    {path:"ajoutProduit",component:AjoutDemandeComponent},
    {path:"updateEfleur/:idEfleur",component:UpdateEfleurComponent},
    {path:"updateEstamp/:idEstamp",component:UpdateEstampComponent},
    {path:"listProduct",component:ProductComponent},

    {path:"ajouteAgent",component:AjoutUtilisateurComponent},
    {path:"listeClient",component:ClientComponent},
    {path:"listeAgent",component:AgentComponent},
    {path:"listecommandes",component:ListcommandesComponent},
    {path:"agentvalidation",component:AgentvalidationComponent}
    

  ]},
  {path:"",component:LoginComponent,canActivate:[LoginGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
