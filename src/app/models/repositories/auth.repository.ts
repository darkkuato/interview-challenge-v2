import { Observable } from 'rxjs';
import { AuthEntity } from '../entities/auth.entity';

export interface AuthRepository {
  signIn(email: string, password: string): Observable<AuthEntity>;
}
