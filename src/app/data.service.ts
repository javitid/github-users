import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './interfaces/User';

@Injectable({
      providedIn: 'root'
})
export class DataService {
  selectedUser?: User;
  users: User[] = [];
  getUsersUrl: string = "https://api.github.com/users";
  
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.getUsersUrl);
  }

  //TODO: Add cache by login to avoid extra requests to retrieve data of the same user
  getUserDetails(userLogin?: string): Observable<User>{
    return this.http.get<User>(this.getUsersUrl + '/' + userLogin);
  }

  getUserRepositories(userLogin?: string): Observable<User>{
    return this.http.get<User>(this.getUsersUrl + '/'  + userLogin + '/repos');
  }

  getUserFollowers(userLogin?: string): Observable<User>{
    return this.http.get<User>(this.getUsersUrl + '/'  + userLogin + '/followers');
  }

  getSelectedUser(): User|undefined {
    return this.selectedUser;
  }

  setSelectedUser(user: User): void {
    this.selectedUser = user;
  }
}