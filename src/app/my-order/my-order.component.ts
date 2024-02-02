import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css'],
})
export class MyOrderComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.shoppingCartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
    });
  }

  calculateSubtotal(item: any): number {
    return item.price * item.quantity;
  }
}
