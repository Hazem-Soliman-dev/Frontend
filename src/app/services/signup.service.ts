import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  url="http://localhost:3001/user";
  constructor(private http:HttpClient) { }
  createUser(data:any):Observable<any>{
    return this.http.post<any>(this.url,data).pipe();
  }
}
