import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchQuery: string = '';
  showSuggestions: boolean = false;
  searchSuggestions: string[] = ['Elegant Saree', 'Casual Salwar Suit', 'Anarkali Gown','Floral Lehenga Choli','Bohemian Kurti Set','Classic Silk Sari','Traditional Bridal Lehenga','Patiala Suit'];

  constructor(private router: Router) {}

  onSearchInput() {
    this.showSuggestions = this.searchQuery.length > 0;
    if (this.searchQuery.length > 0) {
      this.searchSuggestions = this.getFilteredSuggestions(this.searchQuery);
      this.showSuggestions = true;
    } else {
      this.showSuggestions = false;
    }
  }

  search() {
    console.log('Search for:', this.searchQuery);
    // Redirect to the "products" page on the home route
    this.router.navigate(['/home/products'], { queryParams: { query: this.searchQuery } });
  }

  selectSuggestion(suggestion: string) {
    this.searchQuery = suggestion;
    this.showSuggestions = false;
  }

  private getFilteredSuggestions(query: string): string[] {
    return this.searchSuggestions.filter(suggestion => suggestion.toLowerCase().includes(query.toLowerCase()));
  }
}