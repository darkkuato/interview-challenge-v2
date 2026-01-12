import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableCustomComponent } from './table-custom.component';

@NgModule({
  declarations: [TableCustomComponent],
  imports: [CommonModule],
  exports: [TableCustomComponent],
})
export class TableCustomModule {}
