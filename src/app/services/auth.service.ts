import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {
    const token = localStorage.getItem('accessToken');
    if (token) {
      this.tokenSubject.next(token);
    }
  }
  private tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >(null);

  apiURL = 'http://localhost:3001/user/login';
  signupAPI = 'https://localhost:3001/user';
  login(loginData: any): Observable<any> {
    return this._http.post<any>(this.apiURL, loginData).pipe(
      tap((res) => {
        const token = res.accessToken;
        if (token) {
          localStorage.setItem('accessToken', token);
          this.tokenSubject.next(token);
          console.log(res.accessToken);
        }
      })
    );
  }

  getAccessToken(): Observable<string | null> {
    return this.tokenSubject.asObservable();
  }

  logout() {
    this.tokenSubject.next(null);
    localStorage.removeItem('accessToken');
  }

  isAuthanticated(): boolean {
    return this.tokenSubject.value !== null;
  }

  decodeAccessToken(): any {
    const token = this.tokenSubject.value;
    if (token) {
      return jwtDecode<any>(token);
    }
    return null;
  }

  signUp(name: any, email: any, password: any): Observable<any> {
    const userType = '677a49f36a92236b2f2c71f0';
    return this._http.post(`${this.signupAPI}`, {
      name,
      email,
      password,
      userType,
    });
  }
}
