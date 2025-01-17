import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Product {
  _id: string;
  name: string;
  desc: string;
  price: number;
  image: null;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _http: HttpClient) {}

  apiURL = 'http://localhost:3001/product';
  uploadURL = 'http://localhost:3001/images/';
  
  getProducts(): Observable<any> {
    return this._http.get<any>(this.apiURL);
  }

  addProduct(product: any, token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  
    return this._http.post(this.apiURL, product, { headers });
  }

  getProductDetails(productId: string): Observable<Product> {
    return this._http.get<Product>(`${this.apiURL}/${productId}`);
  }

  deleteProduct(productId: string, token: string): Observable<any> {
    return this._http.delete(`${this.apiURL}/${productId}`, { headers: { Authorization: `Bearer ${token}` } });
  }

}
