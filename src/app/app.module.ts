import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { LoginComponent } from './components/login/login.component';

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
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,

    LoginComponent,

   
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
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    /*RouterModule.forRoot([]),
  */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
