import { TransferenciasTableModule } from '@/components/transferencias-table';
import { MainLayoutModule } from '@/layouts/main-layout';
import { TypographyModule } from '@/lib';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TransferenciasComponent } from './transferencias.component';

@NgModule({
  declarations: [TransferenciasComponent],
  imports: [
    CommonModule,
    MainLayoutModule,
    TransferenciasTableModule,
    TypographyModule,
  ],
  exports: [TransferenciasComponent],
})
export class TransferenciasModule {}
