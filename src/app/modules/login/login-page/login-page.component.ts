import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../../authentication/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'] // corrected styleUrls
})
export class LoginPageComponent {

  signInForm: FormGroup;
  errorMessage = '';
  isSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService
  ) {
    this.signInForm = this.fb.group({
      user_name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signIn() {
    this.isSubmitted = true;
    if (this.signInForm.valid) {
      this.authService.login(this.signInForm.value.user_name, this.signInForm.value.password).subscribe(res => {
        if (res && res.user) {
          this.authService.redirectToHomePage();
        } else {
          this.errorMessage = res.message;
        }
      });
    } else {
      // this.utils.validateAllFormFields(this.signInForm);
    }
  }

  redirectToHome() {
    if (this.authService.isAuthTokenAvailable()) {
      this.authService.redirectToHomePage();
    }
  }
}
