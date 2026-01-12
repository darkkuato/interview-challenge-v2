import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-enterprise-detail',
  templateUrl: './enterprise-detail.component.html',
  styleUrls: ['./enterprise-detail.component.scss'],
})
export class EnterpriseDetailComponent {
  @Input() razonSocial?: string;
  @Input() cuit?: string;
  @Output() handlerCuit: EventEmitter<string> = new EventEmitter();
}
