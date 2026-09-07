import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-modal-aside',
  templateUrl: './modal-aside.component.html',
  styleUrls: ['./modal-aside.component.scss'],
})
export class ModalAsideComponent implements OnDestroy {
  showModal: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  show(): void {
    this.document.body.style.overflowY = 'hidden';
    this.showModal = true;
  }

  hide(): void {
    this.document.body.removeAttribute('style');
    this.showModal = false;
  }

  ngOnDestroy(): void {
    this.hide();
  }
}
