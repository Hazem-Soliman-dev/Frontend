import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _http: HttpClient) {}

  apiURL = 'http://localhost:3000/product';
  uploadURL = 'http://localhost:3000/images/';
  
  getProducts(): Observable<any> {
    return this._http.get<any>(this.apiURL);
  }

  addProduct(product: FormData): Observable<any> {
    return this._http.post(this.apiURL, product);
  }
}
