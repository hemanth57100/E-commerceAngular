import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private baseUrl = 'http://localhost:6969/api'; 

  constructor(private http: HttpClient) {}

  registerUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/adduser`, user);
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/fetchUser`);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/fetchUser/${id}`);
  }

  updateUser(id: number, user: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateUser/${id}`, user);
  }

  partiallyUpdateUser(id: number, user: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/updatepatch/${id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteUser/${id}`);
  }

  deleteAllUsers(): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteAllUser`);
  }
}