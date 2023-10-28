import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginForm, SignUpForm, User } from '../interfaces/user';
import { API_URL } from '../constants';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  token = new BehaviorSubject<string | null>(null);
  tokenObs$ = this.token.asObservable();

  userData = new BehaviorSubject<User | null>(null);
  userDataObs$ = this.userData.asObservable();

  constructor(
    private httpClient: HttpClient,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      this.token.next(storedToken);
      this.decodeToken();
    }
    this.tokenObs$.subscribe({
      next: (token) => {
        if (!token) router.navigate(['/']);
      },
    });
  }

  signUp(data: SignUpForm) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    return this.httpClient.post(`${API_URL}/auth/signup`, data, { headers });
  }

  logIn(data: LoginForm) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    return this.httpClient.post(`${API_URL}/auth/login`, data, { headers });
  }

  isLoggedIn(): boolean {
    return !!this.token.value;
  }
  isAdmin(): boolean {
    return this.userData.value?.role === 'admin';
  }

  logOut(): void {
    this.token.next(null);
    this.userData.next(null);

    localStorage.removeItem('token');
  }

  decodeToken(): void {
    const decoded = this.jwtHelper.decodeToken(this.token.value!);
    this.userData.next(decoded.user as User);
    console.log(this.userData.value);
  }
}
