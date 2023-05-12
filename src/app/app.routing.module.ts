import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AuthPageComponent} from "./modules/auth/auth-page/auth-page.component";
import {MainPageComponent} from "./modules/main/main-page/main-page.component";

const routes: Routes = [
  { path: 'auth', component: AuthPageComponent },
  { path: '', component: MainPageComponent },
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
