import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-products',
  standalone: false,
  
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  token: any = localStorage.getItem('accessToken');

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  getProducts(): any[] {
    return this.products;
  }

  deleteProduct(productId: string): void {
    this.productService.deleteProduct(productId, this.token).subscribe(() => {
      this.products = this.products.filter((product) => product._id!== productId);
    });
  }
}
