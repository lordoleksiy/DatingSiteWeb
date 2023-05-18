import {Component, OnInit} from '@angular/core';
import {ProfileService} from "../../../../services/profile.service";
import {IProfile} from "../../../../models/Profile/IProfile";
import {ToastrService} from "ngx-toastr";
import {InviteService} from "../../../../services/invite.service";

@Component({
  selector: 'app-recycler',
  templateUrl: './recycler.component.html',
  styleUrls: ['../styles/recycler.css']
})
export class RecyclerComponent implements OnInit{
  isSearchClosed = false;
  recyclerItems:IProfile[] = []
  constructor(private profileService: ProfileService,
              private toastrService: ToastrService,
              private inviteService: InviteService) {
  }
  ngOnInit(){
    this.UpdateData();
  }
  private UpdateData(){
    this.profileService.Data.subscribe({
      next: value => {
        if (value != null){
          this.recyclerItems = value;
        }
      },
      error: err => {
        this.toastrService.error("Error", err.error.message);
      }
    })
  }

  SendInvite( username: string|undefined){
    if (username == undefined){
      return;
    }
    this.inviteService.sendInvite(username).subscribe({
      next: value => {
        this.toastrService.success("Success", "You successfully send invite!");
        this.recyclerItems = this.recyclerItems.filter((item) => item.username != value);
      },
      error: err => {
        this.toastrService.error("Error", err.error.message);
      }
    })
  }
}
