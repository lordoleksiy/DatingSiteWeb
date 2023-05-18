import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InviteService {

  constructor(private httpClient: HttpClient) { }
  private baseUrl = environment.baseUrl + "/invite";

  sendInvite(recipient: string){
    const url = this.baseUrl + "/send"
    return this.httpClient.post<any>(url, {recipient: recipient});
  }

  getSentInvites(){
    const url: string = this.baseUrl + "/get/sent"
    return this.httpClient.get(url);
  }

  getReceivedInvites(){

  }
}
