import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-enterprise-detail',
  templateUrl: './enterprise-detail.component.html',
  styleUrls: ['./enterprise-detail.component.scss'],
})
export class EnterpriseDetailComponent {
  @Input() razonSocial = '';
  @Input() cuit = '';
  @Output() handlerCuit: EventEmitter<string> = new EventEmitter();

  get formattedCuit(): string {
    return this.cuit.replace(/^(\d{2})(\d{8})(\d)$/, '$1-$2-$3');
  }
}
