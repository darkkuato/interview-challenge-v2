import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { BankingSessionService } from '@/services/banking-session.service';

@Injectable({ providedIn: 'root' })
export class EnterpriseGuard implements CanActivate {
  constructor(
    private readonly session: BankingSessionService,
    private readonly router: Router
  ) {}

  canActivate(): boolean | UrlTree {
    return this.session.selectedEnterprise
      ? true
      : this.router.createUrlTree(['/seleccionar-empresa']);
  }
}
