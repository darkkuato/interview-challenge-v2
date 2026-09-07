import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainLayoutComponent } from './main-layout.component';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [CommonModule],
  exports: [MainLayoutComponent],
})
export class MainLayoutModule {}
