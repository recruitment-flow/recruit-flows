
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LocalstorageService }from '../app/services/localstorage.service'
import { AppConfig } from '../../src/environments/environment'; // adjust the path as necessary

interface User {
  username: string;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private authTokenIdentifier = 'token';
  private apiUrl = 'http://202.21.38.138:1337/api';
  constructor(private http: HttpClient, private router: Router,
    private localStorageService: LocalstorageService) {
    // Check if user is already logged in (e.g., from localStorage or sessionStorage)
    this.checkToken();
  }

  private checkToken(): void {
    const token = localStorage.getItem('token');
    if (token) {
      // Set loggedIn to true if token exists
      this.loggedIn.next(true);
    }
  }
  login(identifier: string, password: string): Observable<any> {
    // Replace with actual API endpoint for login
    return this.http.post<any>(`${this.apiUrl}/auth/local`, { identifier, password }).pipe(
      tap((response: any) => {
        if (response && response.jwt) {
          // Store token and other user information in localStorage
          localStorage.setItem('loginusername', response.user.username);
          localStorage.setItem('loginUserRole', response.user.role || ''); // Assuming 'role' is part of response.user
          localStorage.setItem('token', response.jwt);
          localStorage.setItem(this.authTokenIdentifier, response.jwt);
          this.loggedIn.next(true); // Update loggedIn state
        } else {
          throw new Error('Invalid response structure');
        }
      }),
      catchError(error => {
        // Handle error here and return a user-friendly message
        console.error('Login error:', error);
        return throwError(error.error.message || 'An error occurred during login. Please try again.');
      })
    );
  }

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  logout(): void {
    // Clear token from localStorage upon logout
    localStorage.removeItem('token');
    this.loggedIn.next(false); // Update loggedIn state
    this.router.navigate(['/login']); // Redirect to login page
  }


  /**
     * redirect to state or rbk page as per userinfo
     */
  redirectToHomePage() {
    const loginUserRole = localStorage.getItem('loginUserRole');
     let path = '';

  if (loginUserRole === 'employee') {
    path = 'ysr/assets';
  } else if (loginUserRole === 'tl') {
    path = 'ysr/rbk-location';
  } else if (loginUserRole === 'admin') {
    path = 'ysr/rbk-dashboard';
  } else {
    path = '/main'; // Redirect to login or some default page
  }

  this.router.navigate([path]);
  return path;
    
}
setLoggedIn(value: boolean) {
    this.loggedIn.next(value);
  }

 /**
     * checks if the autho token is available in local storage
     */
 isAuthTokenAvailable() {
    return (this.localStorageService.has(this.authTokenIdentifier) && this.checkIfTokenIsExpired());
}

checkIfTokenIsExpired() {
    const authToken = this.localStorageService.getItem('token');
    let isTokenValid = true;
    const expiry = (JSON.parse(atob(authToken.split('.')[1]))).exp;
    if ((Math.floor((new Date()).getTime() / 1000)) >= expiry) {
        isTokenValid = false;
    }
    return isTokenValid;
}

clearStorageAndNavigateToLogin() {
    this.localStorageService.removeItem(this.authTokenIdentifier);
    location.href = '/login';
}
}
