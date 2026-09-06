import { LoginComponent } from '@/pages/login';
import { SeleccionarEmpresaComponent } from '@/pages/seleccionar-empresa';
import { TransferenciasComponent } from '@/pages/transferencias';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'seleccionar-empresa', component: SeleccionarEmpresaComponent },
  { path: 'transferencias', component: TransferenciasComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
