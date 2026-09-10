import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@/core/guards/auth.guard';
import { EnterpriseGuard } from '@/core/guards/enterprise.guard';
import { EnterpriseSelectionPageComponent } from '@/pages/enterprise-selection/enterprise-selection-page.component';
import { LoginPageComponent } from '@/pages/login/login-page.component';
import { TransfersPageComponent } from '@/pages/transfers/transfers-page.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'seleccionar-empresa',
    component: EnterpriseSelectionPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'transferencias',
    component: TransfersPageComponent,
    canActivate: [AuthGuard, EnterpriseGuard],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
