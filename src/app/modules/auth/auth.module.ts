import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageComponent } from './auth-page/auth-page.component';
import {LoginFormComponent} from "./auth-page/login-form/login-form.component";
import {RegisterFormComponent} from "./auth-page/register-form/register-form.component";
import {AuthService} from "../../services/auth/auth.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    AuthPageComponent
  ],
  exports: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    AuthService
  ]
})
export class AuthModule { }
