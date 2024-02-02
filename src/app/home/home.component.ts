import { Component } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dresses = [{ id: 1, name: 'Elegant Saree', price: 1600, imageUrl: 'https://drive.google.com/uc?export=download&id=1VscClumigCaneRxVWAG-xmyY4y8D9-VV', quantity: 1 },
  { id: 2, name: 'Casual Salwar Suit', price: 1200, imageUrl: 'https://drive.google.com/uc?export=download&id=1drWwKp2GjsTvVlWm3O9IU4oDYP3cWDs7', quantity:1 },
  { id: 3, name: 'Anarkali Gown', price: 850, imageUrl: 'https://drive.google.com/uc?export=download&id=1YgEFKVF3mM14NjcVwGX1unz395mfuodf ', quantity:1 },
  { id: 4, name: 'Floral Lehenga Choli', price: 1100, imageUrl: 'https://drive.google.com/uc?export=download&id=1fYtvHTfgQ9NAn2Th-gQ5g7B1JWdYC10p' , quantity:1},
  { id: 5, name: 'Bohemian Kurti Set', price: 950, imageUrl: 'https://drive.google.com/uc?export=download&id=1dMjstdHqKhgDninPvSjrckYAsNKLfvC6 ', quantity:1 },
  { id: 6, name: 'Classic Silk Sari', price: 1300, imageUrl: 'https://drive.google.com/uc?export=download&id=1vfkYPpPtHx23xNuwB1JIvD-6rkKdZ87i    ' , quantity:1},
  { id: 7, name: 'Traditional Bridal Lehenga', price: 2200, imageUrl: 'https://drive.google.com/uc?export=download&id=1NzhVYSiE9CnUV3Qnjqv-Tg4C5c1-UcSJ    ' , quantity:1},
  { id: 8, name: 'Patiala Suit', price: 750, imageUrl: 'https://drive.google.com/uc?export=download&id=1_KLGC9XhQz5QE-MM9SThN3SHqNpFGxqc    ' , quantity:1}
  
    // Your dress data here...
  ];

  constructor(private shoppingCartService: ShoppingCartService) {}

  addToCart(dress: any): void {
    this.shoppingCartService.addToCart(dress);
  }
}