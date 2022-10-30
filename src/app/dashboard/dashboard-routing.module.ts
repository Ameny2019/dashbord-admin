import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "listDemande", component: ListDemandeComponent },
  { path: "ajoutProduit", component: AjoutDemandeComponent },
  { path: "updateEfleur/:idEfleur", component: UpdateEfleurComponent },
  { path: "updateEstamp/:idEstamp", component: UpdateEstampComponent },
  { path: "listProduct", component: ProductComponent },
  { path: "ajouteAgent", component: AjoutUtilisateurComponent },
  { path: "listeClient", component: ClientComponent },
  { path: "listeAgent", component: AgentComponent },
  { path: "listecommandes", component: ListcommandesComponent },
  { path: "agentvalidation", component: AgentvalidationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
