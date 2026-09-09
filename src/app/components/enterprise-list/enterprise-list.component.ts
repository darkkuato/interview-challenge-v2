import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EnterpriseEntity } from '@/models/entities/enterprise.entity';

@Component({
  selector: 'app-enterprise-list',
  templateUrl: './enterprise-list.component.html',
  styleUrls: ['./enterprise-list.component.scss'],
})
export class EnterpriseListComponent {
  @Input() enterprises: EnterpriseEntity[] = [];
  @Output() enterpriseSelected = new EventEmitter<EnterpriseEntity>();

  selectByCuit(cuit: string): void {
    const enterprise = this.enterprises.find((item) => item.cuit === cuit);

    if (enterprise) {
      this.enterpriseSelected.emit(enterprise);
    }
  }

  trackById(_: number, enterprise: EnterpriseEntity): number {
    return enterprise.id;
  }
}
