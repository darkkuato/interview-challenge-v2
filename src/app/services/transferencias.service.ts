import { environment } from '@environments/environment';
import { TransferenciaEntity } from '@/models/entities/transferencia.entity';
import { TransferenciasRepository } from '@/models/repositories/transferencias.repository';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TransferenciasService implements TransferenciasRepository {
  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<TransferenciaEntity[]> {
    return this.http
      .get<{ transferencias: TransferenciaEntity[] }>(
        `${environment.baseUrl}/transferencias`
      )
      .pipe(map((response) => response.transferencias));
  }
}
