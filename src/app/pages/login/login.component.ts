import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { LoginForm, AuthFulFilled } from 'src/app/interfaces/user';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  loading: boolean = false;

  constructor(
    private authentication: AuthenticationService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
    console.log(' this.loginForm: ', this.loginForm);
  }

  handleSubmit() {
    if (this.loginForm.valid) {
      this.loading = true;
      this.authentication.logIn(this.loginForm.value as LoginForm).subscribe({
        next: (value) => {
          console.log(value);
          const response = value as AuthFulFilled;
          this.authentication.token.next(response.token);
          localStorage.setItem('token', response.token);
          this.authentication.decodeToken();
          this.toastr.success('Logged in Successfully');
          this.router.navigate(['/']);

          this.loading = false;
        },
        error: (err) => {
          console.log('err: ', err);
          this.toastr.error(err.error.message, err.error.error.status);
          this.loading = false;
        },
        complete: () => {
          this.loading = false;
        },
      });
    }
  }
}
