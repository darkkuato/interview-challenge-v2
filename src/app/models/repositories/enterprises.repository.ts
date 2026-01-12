import { Observable } from 'rxjs';
import { EnterpriseEntity } from '../entities/enterprise.entity';

export interface EnterprisesRepository {
  getAll(): Observable<EnterpriseEntity[]>;
}
