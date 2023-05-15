import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {INewUser} from "../models/INewUser";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  register(newUser: INewUser):Observable<any>{
    const url = this.baseUrl + "/register"
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return  this.httpClient.post<any>(url, newUser, {headers: headers});
  }
}
