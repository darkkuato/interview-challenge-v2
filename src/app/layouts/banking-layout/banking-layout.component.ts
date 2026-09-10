import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banking-layout',
  templateUrl: './banking-layout.component.html',
  styleUrls: ['./banking-layout.component.scss'],
})
export class BankingLayoutComponent {
  @Input() variant: 'center' | 'empty' | 'wide' = 'center';
}
