import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import {FormsModule} from "@angular/forms";
import {CommonElementsModule} from "../common-elements/common-elements.module";



@NgModule({
  declarations: [
    ProfilePageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CommonElementsModule
  ]
})
export class ProfileModule { }
