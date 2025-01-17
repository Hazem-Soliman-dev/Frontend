import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class AddproduectService {
  url="http://localhost:3001/product";
  constructor(private http:HttpClient,private Token:LogService) { }
  
  createProduct(data:any):Observable<any>{
     let token=''
      this.Token.getAcess().subscribe((user)=>{
        if(user){
          token=user;
        }
      });
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    return this.http.post<any>(this.url,data,{headers})
  }
}
