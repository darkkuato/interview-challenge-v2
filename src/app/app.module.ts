import { AppRoutingModule } from '@/app-routing.module';
import { AppComponent } from '@/app.component';
import { HttpInterceptorInterceptor } from '@/core/interceptors/http-interceptor.interceptor';
import { LoginModule } from '@/pages/login';
import { SeleccionarEmpresaModule } from '@/pages/seleccionar-empresa';
import { TransferenciasModule } from '@/pages/transferencias';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LoginModule,
    SeleccionarEmpresaModule,
    TransferenciasModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
