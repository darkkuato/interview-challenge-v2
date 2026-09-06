import { SessionService } from '@/core/services/session.service';
import { AuthService } from '@/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(155),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
    ]),
  });

  errors: string[] = [];

  constructor(
    private readonly authService: AuthService,
    private readonly sessionService: SessionService,
    private readonly router: Router
  ) {}

  get emailControl(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.form.get('password') as FormControl;
  }

  onSubmit(): void {
    this.errors = [];

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { email, password } = this.form.value;

    this.authService.signIn(email, password).subscribe({
      next: (auth) => {
        this.sessionService.setToken(auth.token);
        this.router.navigate(['/seleccionar-empresa']);
      },
      error: (error: HttpErrorResponse) => {
        this.errors =
          error.status === 406 || error.status === 401
            ? error.error?.errors ?? []
            : ['Error genérico del sistema, vuelva a intentarlo más tarde'];
      },
    });
  }
}
