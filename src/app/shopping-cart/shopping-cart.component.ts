import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(
    private shoppingCartService: ShoppingCartService,
    private router: Router // Inject Router
  ) { }

  ngOnInit() {
    this.shoppingCartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
    });
  }

  updateQuantity(item: any, event: any): void {
    const newQuantity = event.target.value;
    if (newQuantity && +newQuantity > 0) {
      item.quantity = +newQuantity;
      this.shoppingCartService.addToCart(this.cartItems);
    }
  }

  calculateSubtotal(item: any): number {
    return item.price * item.quantity;
  }

  calculateTotal(): number {
    const total = this.cartItems.reduce((total, item) => {
      const subtotal = this.calculateSubtotal(item);
      console.log(`Item: ${item.name}, Subtotal: ${subtotal}`);
      return total + subtotal;
    }, 0);

    console.log(`Total: ${total}`);
    return total;
  }

  removeItem(itemId: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== itemId);
    this.shoppingCartService.addToCart(this.cartItems);
  }

  removeAllItems(): void {
    this.cartItems = [];
    this.shoppingCartService.addToCart(this.cartItems);
  }

  proceedToCheckout() {
    // Navigate to the delivery info component
    this.router.navigate(['/delivery-inf']); // Adjust the route path
  }
}
