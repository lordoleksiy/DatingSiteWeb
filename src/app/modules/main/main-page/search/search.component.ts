import { Component } from '@angular/core';
import {ProfileService} from "../../../../services/profile.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['../styles/search.css']
})
export class SearchComponent {
  isSearchClosed = false;

  constructor(private profileService: ProfileService) {
  }
  Search(){
    this.isSearchClosed = !this.isSearchClosed;
    this.profileService.getAllProfiles();
  }
}
