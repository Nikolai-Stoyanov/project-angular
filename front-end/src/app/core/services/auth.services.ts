import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  private readonly loginUrl = 'http://localhost:9999/auth/signin';
  private readonly registerUrl = 'http://localhost:9999/auth/signup';

  constructor(
    private http : HttpClient
  ) {  }

  register(body) {
    return this.http.post(this.registerUrl, body);
  }

  login(body) {
    return this.http.post(this.loginUrl, body);
  }

  logout() {
    localStorage.clear();
  }

  isAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  isAdmin() {
    return localStorage.getItem('isAdmin') !== "false";
  }

  getToken(){
    let token=localStorage.getItem('token');
    return token;
  }
}