import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { EnterpriseEntity } from '@/models/entities/enterprise.entity';
import { EnterprisesRepository } from '@/models/repositories/enterprises.repository';

type EnterprisesResponse = {
  enterprises: EnterpriseEntity[];
};

@Injectable({ providedIn: 'root' })
export class EnterprisesService implements EnterprisesRepository {
  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<EnterpriseEntity[]> {
    return this.http
      .get<EnterprisesResponse>(`${environment.baseUrl}/enterprises`)
      .pipe(map(({ enterprises }) => enterprises));
  }
}
