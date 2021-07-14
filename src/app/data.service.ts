import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './interfaces/User';

@Injectable({
      providedIn: 'root'
})
export class DataService {
  searchOption = [];
  users: User[] = [];
  postUrl: string = "https://api.github.com/users";
  
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.postUrl);
  }
}