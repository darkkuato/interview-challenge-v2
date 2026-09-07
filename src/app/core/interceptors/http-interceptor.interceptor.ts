import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionService } from '@/core/services/session.service';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {
  constructor(private readonly sessionService: SessionService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.sessionService.getToken();
    const cuit = this.sessionService.getCuit();

    let headers = request.headers;
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    if (cuit) {
      headers = headers.set('CUIT', cuit);
    }

    return next.handle(request.clone({ headers }));
  }
}
