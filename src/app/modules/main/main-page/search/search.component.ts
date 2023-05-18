import { Component } from '@angular/core';
import {ProfileService} from "../../../../services/profile.service";
import {IProfileFilter} from "../../../../models/Profile/IProfileFilter";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['../styles/search.css']
})
export class SearchComponent {
  isSearchClosed = false;
  filter: IProfileFilter = {
  };
  newKeyword: string = "";

  constructor(private profileService: ProfileService) {
  }
  Search(){
    this.isSearchClosed = !this.isSearchClosed;
    this.profileService.getByFilters(this.filter);
  }
  AddKeyword(){
    if (!this.filter.keywords){
      this.filter.keywords = [];
    }
    if (this.newKeyword.length == 0 || this.filter.keywords.includes(this.newKeyword)){
      return;
    }
    this.filter.keywords.push(this.newKeyword);
    this.newKeyword = ""
  }
  RemoveKeyword(name: string){
    if (!this.filter.keywords){
      return;
    }
    const index = this.filter.keywords.indexOf(name);
    this.filter.keywords!.splice(index, 1);
  }
}
