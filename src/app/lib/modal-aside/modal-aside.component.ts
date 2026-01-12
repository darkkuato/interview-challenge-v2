import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-modal-aside',
  templateUrl: './modal-aside.component.html',
  styleUrls: ['./modal-aside.component.scss'],
})
export class ModalAsideComponent {
  showModal: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  show(): void {
    this.document.body.style.overflowY = 'none';
    this.showModal = true;
  }

  hide(): void {
    this.document.body.removeAttribute('style');
    this.showModal = false;
  }
}
