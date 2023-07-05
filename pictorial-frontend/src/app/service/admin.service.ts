import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Admin } from '../model/admin';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseURL = "http://localhost:8081/admin-login/";
  constructor(private httpClient: HttpClient) { }

  checkAdmin(admin:Admin){
    console.log(admin)
    return this.httpClient.post<Admin>(`${this.baseURL}`,admin);
  }

  }

