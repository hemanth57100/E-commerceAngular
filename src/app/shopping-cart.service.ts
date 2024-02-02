import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  addToCart(item: any) {
    const currentItems = this.cartItemsSubject.value;
    const existingItem = currentItems.find(i => i.id === item.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      const updatedItems = [...currentItems, { ...item, quantity: 1 }];
      this.cartItemsSubject.next(updatedItems);
    }
  }
}

