import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { SignUpForm, AuthFulFilled } from 'src/app/interfaces/user';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm: FormGroup;
  loading: boolean = false;

  constructor(
    private authentication: AuthenticationService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.signupForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(64),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/),
      ]),
    });
    console.log(' this.signupForm: ', this.signupForm);
  }

  handleSubmit() {
    if (this.signupForm.valid) {
      this.loading = true;
      this.authentication
        .signUp(this.signupForm.value as SignUpForm)
        .subscribe({
          next: (value) => {
            console.log(value);
            const response = value as AuthFulFilled;
            this.authentication.token.next(response.token);
            localStorage.setItem('token', response.token);
            this.authentication.decodeToken();
            this.toastr.success('User Created Successfully');
            this.toastr.success('And Logged in Successfully');
            this.router.navigate(['/']);
            this.loading = false;
          },
          error: (err) => {
            console.log(err.error.errors);

            err.error.errors.map((myErr: any) =>
              this.toastr.error(myErr.value, myErr.path)
            );

            this.loading = false;
          },
          complete: () => {
            this.loading = false;
          },
        });
    }
  }
}
