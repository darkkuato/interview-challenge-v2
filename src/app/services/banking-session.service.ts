import { Injectable } from '@angular/core';
import { sessionStorageKeys } from '@/models/consts';
import { AuthEntity } from '@/models/entities/auth.entity';
import { EnterpriseEntity } from '@/models/entities/enterprise.entity';

@Injectable({ providedIn: 'root' })
export class BankingSessionService {
  get token(): string | null {
    return this.authentication?.token ?? null;
  }

  get authentication(): AuthEntity | null {
    const value = sessionStorage.getItem(sessionStorageKeys.authentication);

    if (!value) {
      return null;
    }

    try {
      const authentication = JSON.parse(value) as Partial<AuthEntity>;
      return typeof authentication.token === 'string'
        ? { token: authentication.token }
        : null;
    } catch {
      return null;
    }
  }

  get selectedEnterprise(): EnterpriseEntity | null {
    const value = sessionStorage.getItem(sessionStorageKeys.enterprise);

    if (!value) {
      return null;
    }

    try {
      const enterprise = JSON.parse(value) as Partial<EnterpriseEntity>;
      const isValid =
        typeof enterprise.id === 'number' &&
        typeof enterprise.cuit === 'string' &&
        typeof enterprise.razonSocial === 'string';

      return isValid ? (enterprise as EnterpriseEntity) : null;
    } catch {
      return null;
    }
  }

  saveAuthentication(authentication: AuthEntity): void {
    sessionStorage.setItem(
      sessionStorageKeys.authentication,
      JSON.stringify(authentication)
    );
    sessionStorage.removeItem(sessionStorageKeys.enterprise);
  }

  selectEnterprise(enterprise: EnterpriseEntity): void {
    sessionStorage.setItem(
      sessionStorageKeys.enterprise,
      JSON.stringify(enterprise)
    );
  }

  clearSelectedEnterprise(): void {
    sessionStorage.removeItem(sessionStorageKeys.enterprise);
  }

  clear(): void {
    sessionStorage.removeItem(sessionStorageKeys.authentication);
    sessionStorage.removeItem(sessionStorageKeys.enterprise);
  }
}
