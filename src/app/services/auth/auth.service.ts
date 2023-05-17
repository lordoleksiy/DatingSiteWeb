import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map, Observable, tap} from "rxjs";
import {INewUser} from "../../models/INewUser";
import {IUser} from "../../models/IUser";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient,
              private jwtHelper: JwtHelperService) { }

  register(newUser: INewUser):Observable<any>{
    const url = this.baseUrl + "/register"
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<any>(url, newUser, {headers: headers}).pipe(
      tap(res=>{
        this.SetToken(res['accessToken']);
      }),
      map(res => ({
        links: res['links'],
        user: res['user']
      }))
    )
  }
  login(user: IUser):Observable<any>{
    const url = this.baseUrl + "/login"
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.httpClient.post<any>(url, user, {headers: headers}).pipe(
      tap(res=>{
        this.SetToken(res['accessToken']);
      }),
      map(res => ({
        links: res['links'],
        user: res['user']
      }))
    )
  }

  private SetToken(token: string){
    if (token == null || token.length == 0){
      return;
    }
    localStorage.setItem("AccessKey", token);
  }

  IsAuthorized():boolean{
    const token = localStorage.getItem("AccessKey");
    if (token == null){
      return false;
    }

    return !this.jwtHelper.isTokenExpired(token);
  }
}