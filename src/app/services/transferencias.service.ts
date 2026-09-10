import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { TransferenciaEntity } from '@/models/entities/transferencia.entity';
import { TransferenciasRepository } from '@/models/repositories/transferencias.repository';

type TransferenciasResponse = {
  transferencias: TransferenciaEntity[];
};

@Injectable({ providedIn: 'root' })
export class TransferenciasService implements TransferenciasRepository {
  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<TransferenciaEntity[]> {
    return this.http
      .get<TransferenciasResponse>(`${environment.baseUrl}/transferencias`)
      .pipe(map(({ transferencias }) => transferencias));
  }
}
