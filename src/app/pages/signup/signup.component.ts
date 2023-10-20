import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.signupForm = formBuilder.group({
      name: [
        '',
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(64),
      ],
      email: ['', Validators.required, Validators.email],
      password: [
        '',
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/),
      ],
    });
    console.log(' this.signupForm: ', this.signupForm);
  }

  handleSubmit() {
    console.log(' this.signupForm: ', this.signupForm);
    if (this.signupForm.valid) {
      console.log('Form submitted:', this.signupForm.value);
    }
  }
}
