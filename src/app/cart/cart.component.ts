import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../services/cart.service';
@Component({
  selector: 'app-cart',
  standalone: false,
  
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.updateTotalPrice();
  }

  removeFromCart(id: number) {
    this.cartService.removeFromCart(id);
    this.cartItems = this.cartService.getCartItems();
    this.updateTotalPrice();
  }

  updateQuantity(id: number, quantity: number) {
    this.cartService.updateQuantity(id, quantity);
    this.updateTotalPrice();
  }

  updateTotalPrice() {
    this.totalPrice = this.cartService.getTotalPrice();
  }

  checkout() {
    alert('Proceeding to checkout...');
    this.cartService.clearCart();
    this.cartItems = [];
    this.totalPrice = 0;
  }
}
