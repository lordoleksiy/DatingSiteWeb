import {Component, OnInit} from '@angular/core';
import {ProfileService} from "../../../../services/profile.service";
import {IProfile} from "../../../../models/IProfile";

@Component({
  selector: 'app-recycler',
  templateUrl: './recycler.component.html',
  styleUrls: ['../styles/recycler.css']
})
export class RecyclerComponent implements OnInit{
  isSearchClosed = false;
  recyclerItems:IProfile[] = []
  constructor(private profileService: ProfileService) {
  }
  ngOnInit(){
    this.profileService.Data.subscribe({
      next: value => {
        console.log(value);
      },
      error: err => {
        console.log(err);
      }
    })
  }
}
