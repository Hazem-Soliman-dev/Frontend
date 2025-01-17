import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpClient, private _authS: AuthService) {}
  apiURL = 'http://localhost:3001/userType';
  addUserType(data: any): Observable<any> {
    let token = '';
    this._authS.getAccessToken().subscribe((data) => {
      if (data) {
        token = data;
      }
    });
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this._http.post<any>(this.apiURL, data, { headers });
  }
}
