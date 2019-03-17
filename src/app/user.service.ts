import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../environments/environment'
import { User } from './model/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient) { 
    
  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(environment.baseUrl + "/rest/user");
  }
}
