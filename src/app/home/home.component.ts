import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products = [
    { name: 'Product 1', price: 29.99, image: 'https://via.placeholder.com/200' },
    { name: 'Product 2', price: 39.99, image: 'https://via.placeholder.com/200' },
    { name: 'Product 3', price: 19.99, image: 'https://via.placeholder.com/200' },
    { name: 'Product 4', price: 49.99, image: 'https://via.placeholder.com/200' },
  ];

  categories = [
    { name: 'Electronics', image: 'https://via.placeholder.com/150' },
    { name: 'Fashion', image: 'https://via.placeholder.com/150' },
    { name: 'Home & Kitchen', image: 'https://via.placeholder.com/150' },
    { name: 'Books', image: 'https://via.placeholder.com/150' },
  ];

  toggleTheme() {
    document.body.classList.toggle('dark-mode');
  }
}
