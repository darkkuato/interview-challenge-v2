import { EnterpriseListModule } from '@/components/enterprise-list';
import { ModalAsideModule, TypographyModule } from '@/lib';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SeleccionarEmpresaComponent } from './seleccionar-empresa.component';

@NgModule({
  declarations: [SeleccionarEmpresaComponent],
  imports: [CommonModule, ModalAsideModule, TypographyModule, EnterpriseListModule],
  exports: [SeleccionarEmpresaComponent],
})
export class SeleccionarEmpresaModule {}
