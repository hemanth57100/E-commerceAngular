
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar

@Component({
  selector: 'app-delivery-inf',
  templateUrl: './delivery-inf.component.html',
  styleUrls: ['./delivery-inf.component.css'],
})
export class DeliveryInfComponent {
  constructor(
    private router: Router,
    private snackBar: MatSnackBar // Inject MatSnackBar
  ) { }

  submitForm() {
    // Perform any necessary form processing logic here

    // Show a snackbar message
    this.snackBar.open('Order confirmed. Payment through COD.', 'Close', {
      duration: 3000, // Set the duration in milliseconds
    });

    // Redirect to the MyOrderComponent after form submission
    this.router.navigate(['/my-order']); // Adjust the route path
  }
}
