import { storageKeys } from '@/models/consts';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SessionService {
  getToken(): string | null {
    return sessionStorage.getItem(storageKeys.token);
  }

  setToken(token: string): void {
    sessionStorage.setItem(storageKeys.token, token);
  }

  getCuit(): string | null {
    return sessionStorage.getItem(storageKeys.cuit);
  }

  setCuit(cuit: string): void {
    sessionStorage.setItem(storageKeys.cuit, cuit);
  }

  clear(): void {
    sessionStorage.clear();
  }
}
