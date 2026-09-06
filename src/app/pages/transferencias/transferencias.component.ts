import { TransferenciaEntity } from '@/models/entities/transferencia.entity';
import { TransferenciasService } from '@/services/transferencias.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transferencias-page',
  templateUrl: './transferencias.component.html',
})
export class TransferenciasComponent implements OnInit {
  transferencias: TransferenciaEntity[] = [];
  error = '';

  constructor(private readonly transferenciasService: TransferenciasService) {}

  ngOnInit(): void {
    this.transferenciasService.getAll().subscribe({
      next: (transferencias) => (this.transferencias = transferencias),
      error: () => {
        this.error =
          'No se pudieron recuperar las transferencias, intentelo de nuevo más tarde';
      },
    });
  }
}
