import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AuthPageComponent} from "./modules/auth/auth-page/auth-page.component";
import {MainPageComponent} from "./modules/main/main-page/main-page.component";
import {authGuard} from "./services/auth/auth.guard";
import {ProfilePageComponent} from "./modules/profile/profile-page/profile-page.component";

const routes: Routes = [
  { path: 'auth', component: AuthPageComponent },
  {path: '', redirectTo:'main', pathMatch: 'full'},
  { path: 'main', component: MainPageComponent, canActivate:[authGuard] },
  { path: 'profile', component: ProfilePageComponent, canActivate:[authGuard]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
