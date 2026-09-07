import { EnterpriseDetailModule } from '@/lib';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EnterpriseListComponent } from './enterprise-list.component';

@NgModule({
  declarations: [EnterpriseListComponent],
  imports: [CommonModule, EnterpriseDetailModule],
  exports: [EnterpriseListComponent],
})
export class EnterpriseListModule {}
