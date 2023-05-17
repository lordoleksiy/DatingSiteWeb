import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Subject, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  Data:Subject<any> = new Subject<any>()
  private baseUrl = environment.baseUrl + "/profile";
  constructor(private httpClient: HttpClient) { }
  getAllProfiles(){
    const url = this.baseUrl + "/all"
    this.httpClient.get<any>(url).pipe(
      tap(val => this.Data.next(val))
    ).subscribe()
  }
}
