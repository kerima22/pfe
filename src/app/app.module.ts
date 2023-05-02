import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import {  HttpClientModule } from '@angular/common/http';
import { CongeComponent } from './conge/conge.component';
import { AutorisationComponent } from './autorisation/autorisation.component';
import { MescongesComponent } from './mesconges/mesconges.component';
import { ChefComponent } from './chef/chef.component';
import { MesAutorisationComponent } from './mes-autorisation/mes-autorisation.component';
import { ServiceComponent } from './service/service.component';
import { GestionPersonnelComponent } from './gestion-personnel/gestion-personnel.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    CongeComponent,
    AutorisationComponent,
    MescongesComponent,
    ChefComponent,
    MesAutorisationComponent,
    ServiceComponent,
    GestionPersonnelComponent,
    
  
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
