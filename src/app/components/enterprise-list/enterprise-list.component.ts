import { EnterpriseEntity } from '@/models/entities/enterprise.entity';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-enterprise-list',
  templateUrl: './enterprise-list.component.html',
  styleUrls: ['./enterprise-list.component.scss'],
})
export class EnterpriseListComponent {
  @Input() enterprises: EnterpriseEntity[] = [];
  @Output() select: EventEmitter<EnterpriseEntity> = new EventEmitter();
}
