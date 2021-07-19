import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';

import { UsersSearch } from './interfaces/UsersSearch';
import { User } from './interfaces/User';
import { Repo } from './interfaces/Repo';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  httpError?: HttpErrorResponse;
  selectedUser?: User;
  users?: User[];
  getSearchUrl: string = "https://api.github.com/search/users?q=";
  getUsersUrl: string = "https://api.github.com/users";
  
  constructor(private http: HttpClient) { }

  retrieveUsers(query: string): Observable<UsersSearch>{
    const usersRetrieved = this.http.get<UsersSearch>(this.getSearchUrl + query);
    return usersRetrieved;
  }

  //TODO: Add cache by login to avoid extra requests to retrieve data of the same user
  getUserDetails(userLogin?: string): Observable<User>{
    return this.http.get<User>(this.getUsersUrl + '/' + userLogin);
  }

  getUserFollowers(userLogin?: string): Observable<User[]>{
    return this.http.get<User[]>(this.getUsersUrl + '/'  + userLogin + '/followers');
  }

  getUserRepositories(userLogin?: string): Observable<Repo[]>{
    return this.http.get<Repo[]>(this.getUsersUrl + '/'  + userLogin + '/repos');
  }

  getSelectedUser(): User|undefined {
    return this.selectedUser;
  }

  setSelectedUser(user: User): void {
    this.selectedUser = user;
  }

  getHttpError(): HttpErrorResponse|undefined  {
    return this.httpError;
  }

  setHttpError(error: HttpErrorResponse): void {
    this.httpError = error;
  }
}