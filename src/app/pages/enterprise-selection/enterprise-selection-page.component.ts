import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnterpriseEntity } from '@/models/entities/enterprise.entity';
import { BankingSessionService } from '@/services/banking-session.service';
import { EnterprisesService } from '@/services/enterprises.service';

@Component({
  selector: 'app-enterprise-selection-page',
  templateUrl: './enterprise-selection-page.component.html',
  styleUrls: ['./enterprise-selection-page.component.scss'],
})
export class EnterpriseSelectionPageComponent implements OnInit {
  enterprises: EnterpriseEntity[] = [];
  loading = true;

  constructor(
    private readonly enterprisesService: EnterprisesService,
    private readonly session: BankingSessionService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.enterprisesService.getAll().subscribe({
      next: (enterprises) => {
        this.enterprises = enterprises;
        this.loading = false;
      },
      error: () => {
        this.session.clear();
        this.router.navigate(['/']);
      },
    });
  }

  selectEnterprise(enterprise: EnterpriseEntity): void {
    this.session.selectEnterprise(enterprise);
    this.router.navigate(['/transferencias']);
  }
}
