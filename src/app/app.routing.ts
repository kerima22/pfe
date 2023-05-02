import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';

import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CongeComponent } from './conge/conge.component';
import { AutorisationComponent } from './autorisation/autorisation.component';
import { MescongesComponent } from './mesconges/mesconges.component';
import { ChefComponent } from './chef/chef.component';
import { MesAutorisationComponent } from './mes-autorisation/mes-autorisation.component';
import { ServiceComponent } from './service/service.component';
import { GestionPersonnelComponent } from './gestion-personnel/gestion-personnel.component';



const
 routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'login',          component: LoginComponent },
    { path: 'conge',          component: CongeComponent },
    { path: 'autorisation',          component: AutorisationComponent},
    { path: 'profile',          component: ProfileComponent},
    {path: 'mesconges', component: MescongesComponent},
    {path: 'chef', component: ChefComponent},
    {path: 'mesautorisations', component: MesAutorisationComponent},
    {path: 'service', component: ServiceComponent},
    {path: 'personnel', component: GestionPersonnelComponent},


    
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
   ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
