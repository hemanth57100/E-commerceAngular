import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'E-commerce';
  isHomePage = false;
  isShoppingCartPage = false;
  isSearchPage = false;
  isMyOrderPage = false;
  isFilterPage = false;
  isAboutUsPage: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = this.router.url === '/home';

        this.isShoppingCartPage = this.router.url === '/shopping-cart';

        this.isSearchPage = this.router.url === '/search';
        this.isMyOrderPage = this.router.url === '/my-order';
        this.isFilterPage = this.router.url === '/filter';
        this.isAboutUsPage = this.router.url === '/about-us';
      }
    });
  }

  logout() {
    this.router.navigate(['/home']);
  }
}