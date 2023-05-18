import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {IProfile} from "../models/Profile/IProfile";
import {IProfileFilter} from "../models/Profile/IProfileFilter";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  Data:BehaviorSubject<any> = new BehaviorSubject<any>(null)
  private baseUrl = environment.baseUrl + "/profile";
  constructor(private httpClient: HttpClient) { }
  getAllProfiles(){
    const url = this.baseUrl + "/all"
    this.httpClient.get<any>(url).subscribe((data) => {
      this.Data.next(data);
    });
  }
  get(){
    const url = this.baseUrl + "/get"
    return this.httpClient.get<any>(url);
  }
  post(profile: IProfile){
    const url = this.baseUrl + "/set";
    return this.httpClient.post<any>(url, profile);
  }
  delete(){
    const url = this.baseUrl + "/delete"
    return this.httpClient.delete(url);
  }

  getByFilters(filter: IProfileFilter){
    const url = this.baseUrl + "/filter";
    this.httpClient.post<any>(url, filter).subscribe((data) => {
      this.Data.next(data);
    });
  }
}
