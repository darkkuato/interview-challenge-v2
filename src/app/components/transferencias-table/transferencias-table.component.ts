import { tranfEstadoLabel } from '@/models/consts';
import { TransferenciaEntity } from '@/models/entities/transferencia.entity';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transferencias-table',
  templateUrl: './transferencias-table.component.html',
  styleUrls: ['./transferencias-table.component.scss'],
})
export class TransferenciasTableComponent {
  @Input() transferencias: TransferenciaEntity[] = [];

  readonly tranfEstadoLabel = tranfEstadoLabel;
}
