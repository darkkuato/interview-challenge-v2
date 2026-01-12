import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-outline',
  templateUrl: './input-outline.component.html',
  styleUrls: ['./input-outline.component.scss'],
})
export class InputOutlineComponent {
  @Input() type: 'text' | 'email' | 'password' = 'text';
  @Input() placeholder: string = '';
  @Input() control?: FormControl;
}
