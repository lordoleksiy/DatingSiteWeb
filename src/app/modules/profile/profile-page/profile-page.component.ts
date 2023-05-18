import { Component } from '@angular/core';
import {IProfile} from "../../../models/Profile/IProfile";
import {IInvite} from "../../../models/IInvite";
import {ProfileService} from "../../../services/profile.service";
import {validateProfile} from "./validation";
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../../../services/auth/auth.service";
import {Router} from "@angular/router";
import {InviteService} from "../../../services/invite.service";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {
  profile: IProfile = { age: 18, city: "", description: "", firstName: "", gender: "", keywords: [], lastName: "", contact:"" };
  invites: IInvite[] = [];
  editMode: boolean = false;

  constructor(private profileService:ProfileService,
              private toastrService: ToastrService,
              private authService: AuthService,
              private router: Router,
              private inviteService: InviteService) {
    this.profileService.get().subscribe({
      next: value => {
        this.profile = {
          age: value['profile'].age,
          city: value['profile'].city,
          contact: value.contact,
          description: value['profile'].description,
          firstName: value['profile'].firstName,
          gender: value['profile'].gender,
          keywords: value['profile'].keywords,
          lastName: value['profile'].lastName
        }
      }
      }
    );
    inviteService.getSentInvites().subscribe({
      next: value => {
        console.log(value);
      }
    })
  }

  addKeyword() {
    this.profile.keywords.push({word: ''});
  }

  removeKeyword(index: number) {
    this.profile.keywords.splice(index, 1);
  }

  saveProfile() {
    if (!validateProfile(this.profile)){
      this.toastrService.error("Fill in all fields!");
      return;
    }
    console.log(this.profile)
    this.profileService.post(this.profile).subscribe({
      next: value => {
        this.toastrService.success("You are successfully changed profile!");
      },
      error: err => {
        this.toastrService.error("Error", err.error.message);
      }
    })
  }
  logout(){
    // this.authService.logout().subscribe(()=> {
    //   localStorage.removeItem("AccessKey");
    //   return this.router.navigateByUrl("/auth");
    // });
  }
  deleteProfile(){
    this.profileService.delete().subscribe({
      complete: () => {
        this.toastrService.success("You are successfully deleted profile");
        return this.router.navigateByUrl("/main");
      },
      error: err => {
        this.toastrService.error("Error", "You have no profile!");
      }
    });
  }
}

