import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { urlApi } from './shared/url.api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      })
  };

  constructor(private http: HttpClient) { }

  public newRegister(user: any) {
    return this.http.post<any>(`${urlApi}/register`, user);
  }
}
