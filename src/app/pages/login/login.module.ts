import { MainLayoutModule } from '@/layouts/main-layout';
import { ButtonPrimaryModule, InputOutlineModule, TypographyModule } from '@/lib';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MainLayoutModule,
    ButtonPrimaryModule,
    InputOutlineModule,
    TypographyModule,
  ],
  exports: [LoginComponent],
})
export class LoginModule {}
