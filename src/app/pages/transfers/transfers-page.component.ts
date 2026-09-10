import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnterpriseEntity } from '@/models/entities/enterprise.entity';
import { TransferenciaEntity } from '@/models/entities/transferencia.entity';
import { BankingSessionService } from '@/services/banking-session.service';
import { TransferenciasService } from '@/services/transferencias.service';

@Component({
  selector: 'app-transfers-page',
  templateUrl: './transfers-page.component.html',
  styleUrls: ['./transfers-page.component.scss'],
})
export class TransfersPageComponent implements OnInit {
  transfers: TransferenciaEntity[] = [];
  enterprise: EnterpriseEntity | null = null;
  loading = true;
  errorMessage = '';

  constructor(
    private readonly transferenciasService: TransferenciasService,
    private readonly session: BankingSessionService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.enterprise = this.session.selectedEnterprise;
    this.loadTransfers();
  }

  loadTransfers(): void {
    this.loading = true;
    this.errorMessage = '';

    this.transferenciasService.getAll().subscribe({
      next: (transfers) => {
        this.transfers = transfers;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.errorMessage =
          'No se pudieron recuperar las transferencias, intentelo de nuevo más tarde';
      },
    });
  }

  changeEnterprise(): void {
    this.session.clearSelectedEnterprise();
    this.router.navigate(['/seleccionar-empresa']);
  }
}
