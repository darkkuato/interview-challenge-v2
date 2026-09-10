import { AppRoutingModule } from '@/app-routing.module';
import { AppComponent } from '@/app.component';
import { EnterpriseListComponent } from '@/components/enterprise-list/enterprise-list.component';
import { LoginFormComponent } from '@/components/login-form/login-form.component';
import { TransfersTableComponent } from '@/components/transfers-table/transfers-table.component';
import { HttpInterceptorInterceptor } from '@/core/interceptors/http-interceptor.interceptor';
import { BankingLayoutComponent } from '@/layouts/banking-layout/banking-layout.component';
import {
  ButtonPrimaryModule,
  EnterpriseDetailModule,
  InputOutlineModule,
  ModalAsideModule,
  TableCustomModule,
  TypographyModule,
} from '@/lib';
import { EnterpriseSelectionPageComponent } from '@/pages/enterprise-selection/enterprise-selection-page.component';
import { LoginPageComponent } from '@/pages/login/login-page.component';
import { TransfersPageComponent } from '@/pages/transfers/transfers-page.component';
import { registerLocaleData } from '@angular/common';
import localeEsAr from '@angular/common/locales/es-AR';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

registerLocaleData(localeEsAr);

@NgModule({
  declarations: [
    AppComponent,
    BankingLayoutComponent,
    LoginFormComponent,
    EnterpriseListComponent,
    TransfersTableComponent,
    LoginPageComponent,
    EnterpriseSelectionPageComponent,
    TransfersPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ButtonPrimaryModule,
    EnterpriseDetailModule,
    InputOutlineModule,
    ModalAsideModule,
    TableCustomModule,
    TypographyModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-AR' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
