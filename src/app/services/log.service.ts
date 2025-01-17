import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private http:HttpClient) {
    const token = localStorage.getItem('token');
    if(token){
      this.token.next(token);
    }
   }
  private token:BehaviorSubject<string|null> = new BehaviorSubject<string|null>(null);
  login(data:any): Observable<any> {
    console.log(data);
    
    return this.http.post<any>('http://localhost:3001/user/login',data).pipe(
      tap((res:any)=>{
        localStorage.setItem('token',res.accessToken);
        // console.log(res.accessToken);
        this.token.next(res.accessToken);
      })
    );
  }
  getAcess():Observable<string|null>{
return this.token.asObservable();
  }
  logout(){
    localStorage.removeItem('token');
    this.token.next(null);
  }
  isAuth():boolean{
    return this.token.value?true:false
  }
  decode(){
    const token=this.token.value;
    if(token){
      return jwtDecode<any>(token);;
    }
    return null;
  }
}
