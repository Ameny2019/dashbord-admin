import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutDemandeComponent } from './components/demandeProduit/ajout-demande/ajout-demande.component';
import { ListDemandeComponent } from './components/demandeProduit/list-demande/list-demande.component';
import { UpdateEfleurComponent } from './components/efleur/update-efleur/update-efleur.component';
import { UpdateEstampComponent } from './components/efleur/update-estamp/update-estamp.component';
import { ListcommandesComponent } from './components/listcommandes/listcommandes.component';
import { ProductComponent } from './components/product/product.component';
import { AgentComponent } from './components/utilisateur/agent/agent.component';
import { AgentvalidationComponent } from './components/utilisateur/agentvalidation/agentvalidation.component';
import { ClientComponent } from './components/utilisateur/client/client.component';
import { AjoutUtilisateurComponent } from './components/utilisateur/ajout-utilisateur/ajout-utilisateur.component';
import { CommandeDetailsComponent } from './components/commande-details/commande-details.component';

const routes: Routes = [
  { path: "listDemande", component: ListDemandeComponent },
  { path: "ajoutProduit", component: AjoutDemandeComponent },
  { path: "updateEfleur/:idEfleur", component: UpdateEfleurComponent },
  { path: "updateEstamp/:idEstamp", component: UpdateEstampComponent },
  { path: "listProduct", component: ProductComponent },
  { path: "ajouteAgent", component: AjoutUtilisateurComponent },
  { path: "listeClient", component: ClientComponent },
  { path: "listeAgent", component: AgentComponent },
  { path: "agentvalidation", component: AgentvalidationComponent },
  { path: "commandes", component: ListcommandesComponent },
  { path: "commandes/details/:id", component: CommandeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
