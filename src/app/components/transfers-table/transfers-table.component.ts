import { Component, Input } from '@angular/core';
import { TranfEstado, tranfEstado } from '@/models/consts';
import { TransferenciaEntity } from '@/models/entities/transferencia.entity';

@Component({
  selector: 'app-transfers-table',
  templateUrl: './transfers-table.component.html',
  styleUrls: ['./transfers-table.component.scss'],
})
export class TransfersTableComponent {
  @Input() transfers: TransferenciaEntity[] = [];

  private readonly statusLabels: Record<TranfEstado, string> = {
    [tranfEstado.aprobado]: 'Aprobado',
    [tranfEstado.rechazado]: 'Rechazado',
    [tranfEstado.pendiente]: 'Pendiente',
  };

  statusLabel(status: TranfEstado): string {
    return this.statusLabels[status];
  }

  statusClass(status: TranfEstado): string {
    return `status--${status.toLowerCase()}`;
  }

  trackByTransaction(index: number, transfer: TransferenciaEntity): string {
    return `${transfer.nroTransaccion}-${index}`;
  }
}
