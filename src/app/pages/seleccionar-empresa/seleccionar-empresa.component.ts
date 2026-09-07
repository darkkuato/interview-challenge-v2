import { SessionService } from '@/core/services/session.service';
import { ModalAsideComponent } from '@/lib';
import { EnterpriseEntity } from '@/models/entities/enterprise.entity';
import { EnterprisesService } from '@/services/enterprises.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seleccionar-empresa-page',
  templateUrl: './seleccionar-empresa.component.html',
  styleUrls: ['./seleccionar-empresa.component.scss'],
})
export class SeleccionarEmpresaComponent implements OnInit {
  @ViewChild(ModalAsideComponent, { static: true })
  modalAside!: ModalAsideComponent;

  enterprises: EnterpriseEntity[] = [];

  constructor(
    private readonly enterprisesService: EnterprisesService,
    private readonly sessionService: SessionService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.modalAside.show();

    this.enterprisesService.getAll().subscribe({
      next: (enterprises) => (this.enterprises = enterprises),
      error: () => {
        this.sessionService.clear();
        this.router.navigate(['/']);
      },
    });
  }

  onSelect(enterprise: EnterpriseEntity): void {
    this.sessionService.setCuit(enterprise.cuit);
    this.router.navigate(['/transferencias']);
  }
}
