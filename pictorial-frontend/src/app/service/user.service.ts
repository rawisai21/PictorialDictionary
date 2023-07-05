import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {


  private baseURL = "http://localhost:8081/user-login/users";
  private baseURL1 = "http://localhost:8081/user-login/";

  constructor(private httpClient: HttpClient) { }

  checkUser(user:User){
    return this.httpClient.post<User>(`${this.baseURL1}`,user);
  }

  createUser(user: User): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, user);
  }
  getUsersList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }

  getUserById(id: number): Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/${id}`);
  }

  updateUser(id: number, User: User): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, User);
  }

  deleteUser(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
