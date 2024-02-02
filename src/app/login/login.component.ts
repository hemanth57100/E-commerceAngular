// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router, private authService: AuthService) {}

  onSubmit() {
    this.authService.login({ username: this.username, password: this.password })
      .subscribe(
        () => {
          this.router.navigate(['/home']);
        },
        (error) => {
          this.errorMessage = 'Invalid credentials. Please try again.';
          console.error(error);
        }
      );
  }
}