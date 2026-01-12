import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss'],
})
export class TypographyComponent {
  @Input() family: 'primary' | 'secondary' = 'primary';
  @Input() size: 'xl' | 'lg' | 'base' | 'sm' = 'base';
  @Input() weight: 'bold' | 'semibold' | 'regular' = 'regular';
  @Input() color:
    | 'primary-dark'
    | 'primary'
    | 'primary-light'
    | 'white'
    | 'black' = 'black';
}
