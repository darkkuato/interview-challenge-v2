import { TypographyModule } from '@/lib/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EnterpriseDetailComponent } from './enterprise-detail.component';

@NgModule({
  declarations: [EnterpriseDetailComponent],
  imports: [CommonModule, TypographyModule],
  exports: [EnterpriseDetailComponent],
})
export class EnterpriseDetailModule {}
