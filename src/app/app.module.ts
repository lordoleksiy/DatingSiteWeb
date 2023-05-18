import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app.routing.module";
import {AuthModule} from "./modules/auth/auth.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {JWT_OPTIONS, JwtHelperService} from "@auth0/angular-jwt";
import {MainModule} from "./modules/main/main.module";
import {AuthInterceptor} from "./services/auth/auth.interceptor";
import {ProfileModule} from "./modules/profile/profile.module";
import {CommonElementsModule} from "./modules/common-elements/common-elements.module";
import {AuthService} from "./services/auth/auth.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    MainModule,
    ProfileModule,
    CommonElementsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    AuthService
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
