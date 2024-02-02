import { Component } from '@angular/core';
import { RegisterService } from '../register.service';
import { ShoppingUser } from '../shopping-user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  user: ShoppingUser = new ShoppingUser();

  constructor(
    private registerService: RegisterService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  registerNewUser() {
    console.log('User Gender:', this.user.gender);

    this.registerService.registerUser(this.user).subscribe(
      (data: any) => {
        console.log(data);
        const snackBarRef = this.snackBar.open('Thanks for registering!', 'Close');

       
        setTimeout(() => {
          snackBarRef.dismiss();
          this.router.navigate(['/login']);
        }, 200);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }


  updateUserById(id: number) {
    this.registerService.updateUser(id, this.user).subscribe(
      (data: any) => {
        console.log(data); 
      },
      (error: any) => {
        console.error(error); 
      }
    );
  }

  partiallyUpdateUserById(id: number) {
    this.registerService.partiallyUpdateUser(id, this.user).subscribe(
      (data: any) => {
        console.log(data); 
      },
      (error: any) => {
        console.error(error); 
      }
    );
  }

  deleteUserById(id: number) {
    this.registerService.deleteUser(id).subscribe(
      (data: any) => {
        console.log(data); 
      },
      (error: any) => {
        console.error(error); 
      }
    );
  }

  deleteAllUsers() {
    this.registerService.deleteAllUsers().subscribe(
      (data: any) => {
        console.log(data);
      },
      (error: any) => {
        console.error(error); 
      }
    );
  }
}