import { Injectable } from '@angular/core';

export interface CartItem {
  _id: number;
  name: string;
  price: number;
  count: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}
  private items: CartItem[] = [];

  getCartItems() {
    return this.items;
  }

  addToCart(item: CartItem) {
    const existingItem = this.items.find(i => i._id === item._id);
    if (existingItem) {
      existingItem.count += 1;
    } else {
      this.items.push({ ...item, count: 1 });
    }
  }

  removeFromCart(id: number) {
    this.items = this.items.filter(item => item._id !== id);
  }

  updateQuantity(id: number, count: number) {
    const item = this.items.find(i => i._id === id);
    if (item) {
      item.count = count;
    }
  }

  clearCart() {
    this.items = [];
  }

  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.price * item.count, 0);
  }

  getCartCount() {
    return this.items.reduce((total, item) => total + item.count, 0);
  }

}

