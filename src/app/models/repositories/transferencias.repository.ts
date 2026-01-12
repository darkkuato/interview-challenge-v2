import { Observable } from 'rxjs';
import { TransferenciaEntity } from '../entities/transferencia.entity';

export interface TransferenciasRepository {
  getAll(): Observable<TransferenciaEntity[]>;
}
