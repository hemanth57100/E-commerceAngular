// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LoginUser } from './login-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:6969/api/users';

  constructor(private http: HttpClient) {}

  login(loginUser: LoginUser): Observable<boolean> {
    return this.http.post<{ message: string }>(`${this.apiUrl}/login`, loginUser)
      .pipe(
        map(response => {
          if (response.message === 'Login successful!') {
            return true;
          } else {
            throw new Error('Invalid credentials');
          }
        }),
        catchError(error => {
          console.error(error);
          return of(false);
        })
      );
  }
}