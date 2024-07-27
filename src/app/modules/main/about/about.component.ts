import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../../authentication/authentication.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  loginUser: any;
  constructor(private router: Router, private authService: AuthenticationService) {
    this.loginUser = localStorage.getItem('loginusername')
  }

  logout() {
    // Clear local storage
    localStorage.removeItem('token');
    localStorage.removeItem('loginUserRole');
    // Update the loggedIn state
    this.authService.setLoggedIn(false);
    // Navigate to the login page
    this.router.navigate(['/login']);
  }
}
