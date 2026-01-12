import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputOutlineComponent } from './input-outline.component';

@NgModule({
  declarations: [InputOutlineComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [InputOutlineComponent],
})
export class InputOutlineModule {}
