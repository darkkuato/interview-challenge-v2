import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BankingSessionService } from '@/services/banking-session.service';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {
  constructor(private readonly session: BankingSessionService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const headers: Record<string, string> = {};
    const token = this.session.token;
    const enterprise = this.session.selectedEnterprise;

    if (token && !request.url.endsWith('/auth/sign-in')) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    if (enterprise && request.url.endsWith('/transferencias')) {
      headers['CUIT'] = enterprise.cuit;
    }

    const authenticatedRequest = Object.keys(headers).length
      ? request.clone({ setHeaders: headers })
      : request;

    return next.handle(authenticatedRequest);
  }
}
