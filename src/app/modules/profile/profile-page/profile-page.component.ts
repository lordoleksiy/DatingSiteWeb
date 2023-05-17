import { Component } from '@angular/core';
import {IProfile} from "../../../models/IProfile";
import {IInvite} from "../../../models/IInvite";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {
  profile: IProfile;
  invites: IInvite[];
  editMode: boolean = false;

  constructor() {
    // Пример данных профиля
    this.profile = {
      age: 20,
      gender: 'MALE',
      city: 'Kyiv',
      keywords: [{word: 'test1'}, {word: 'test2'}, {word: 'test3'}],
      description: 'description',
      firstName: 'firstName',
      lastName: 'lastName'
    };
    this.invites = [
      {
        from: "user1",
        to: "user2",
        status: "accepted"
      }
    ]

  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  addKeyword() {
    this.profile.keywords.push({word: ''});
  }

  removeKeyword(index: number) {
    this.profile.keywords.splice(index, 1);
  }

  saveProfile() {
    // Здесь вы можете отправить
  }
}

