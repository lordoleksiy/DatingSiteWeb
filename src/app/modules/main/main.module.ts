import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page/main-page.component';
import {CommonModule} from "@angular/common";
import { SearchComponent } from './main-page/search/search.component';
import { RecyclerComponent } from './main-page/recycler/recycler.component';
import {ProfileService} from "../../services/profile.service";
import {RouterLink} from "@angular/router";
import {CommonElementsModule} from "../common-elements/common-elements.module";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    MainPageComponent,
    SearchComponent,
    RecyclerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    CommonElementsModule
  ],
  providers:[
    ProfileService
  ]
})
export class MainModule { }
