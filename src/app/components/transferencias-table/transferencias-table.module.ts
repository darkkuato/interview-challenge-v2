import { TableCustomModule } from '@/lib';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TransferenciasTableComponent } from './transferencias-table.component';

@NgModule({
  declarations: [TransferenciasTableComponent],
  imports: [CommonModule, TableCustomModule],
  exports: [TransferenciasTableComponent],
})
export class TransferenciasTableModule {}
