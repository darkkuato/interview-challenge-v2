import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { SignInCredentials } from '@/models/entities/auth.entity';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @Input() serverErrors: string[] = [];
  @Input() submitting = false;
  @Output() credentialsSubmitted = new EventEmitter<SignInCredentials>();

  readonly form = this.formBuilder.group({
    email: [
      '',
      [Validators.required, Validators.email, Validators.maxLength(155)],
    ],
    password: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(16)],
    ],
  });

  constructor(private readonly formBuilder: FormBuilder) {}

  get emailControl(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.form.get('password') as FormControl;
  }

  submit(): void {
    if (this.form.invalid || this.submitting) {
      this.form.markAllAsTouched();
      return;
    }

    this.credentialsSubmitted.emit({
      email: String(this.emailControl.value),
      password: String(this.passwordControl.value),
    });
  }
}
