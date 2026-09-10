import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { SignInCredentials } from '@/models/entities/auth.entity';
import { AuthService } from '@/services/auth.service';
import { BankingSessionService } from '@/services/banking-session.service';

type ApiErrorBody = {
  errors?: unknown;
};

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  errors: string[] = [];
  submitting = false;

  constructor(
    private readonly authService: AuthService,
    private readonly session: BankingSessionService,
    private readonly router: Router
  ) {}

  signIn(credentials: SignInCredentials): void {
    this.errors = [];
    this.submitting = true;

    this.authService
      .signIn(credentials.email, credentials.password)
      .pipe(finalize(() => (this.submitting = false)))
      .subscribe({
        next: (authentication) => {
          this.session.saveAuthentication(authentication);
          this.router.navigate(['/seleccionar-empresa']);
        },
        error: (error: HttpErrorResponse) => {
          this.errors = this.resolveErrors(error);
        },
      });
  }

  private resolveErrors(error: HttpErrorResponse): string[] {
    const apiError = error.error as ApiErrorBody | null;
    const apiErrors = apiError?.errors;

    if (error.status === 406 && Array.isArray(apiErrors)) {
      const messages = apiErrors.filter(
        (item): item is string => typeof item === 'string'
      );

      if (messages.length) {
        return messages;
      }
    }

    return ['Error genérico del sistema, vuelva a intentarlo más tarde'];
  }
}
