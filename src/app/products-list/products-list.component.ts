import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products-list',
  standalone: false,
  
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit{
constructor(private _productS:ProductService){}
products!:any[]; 
imageURL =''
  ngOnInit(): void {
   this.imageURL = this._productS.uploadURL
   this._productS.getProducts().subscribe(data=>{
    console.log(data)
    this.products = data;
   })
  }

}
