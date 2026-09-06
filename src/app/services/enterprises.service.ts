import { environment } from '@environments/environment';
import { EnterpriseEntity } from '@/models/entities/enterprise.entity';
import { EnterprisesRepository } from '@/models/repositories/enterprises.repository';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class EnterprisesService implements EnterprisesRepository {
  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<EnterpriseEntity[]> {
    return this.http
      .get<{ enterprises: EnterpriseEntity[] }>(
        `${environment.baseUrl}/enterprises`
      )
      .pipe(map((response) => response.enterprises));
  }
}
