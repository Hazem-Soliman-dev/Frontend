import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  standalone: false,

  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent implements OnInit {
  constructor(
    private _productS: ProductService,
    private cartService: CartService,
    private router: Router
  ) {}
  products!: any[];
  imageURL = '';
  ngOnInit(): void {
    this.imageURL = this._productS.uploadURL;
    this._productS.getProducts().subscribe((data) => {
      console.log(data);
      this.products = data;
    });
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }

  viewProduct(productId: string | null): void {
    if (!productId) {
      return;
    }

    this._productS.getProductDetails(productId).subscribe(
      (data) => {
        this.router.navigate(['/product/', productId]);
        return data;
      },
      (err) => {
        console.error('Error viewing product:', err);
      }
    );
  }
}
