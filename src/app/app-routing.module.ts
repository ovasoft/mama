import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemitRegisterFormComponent } from './components/remit-register-form/remit-register-form.component';
import { RemitLandingPageComponent } from './components/remit-landing-page/remit-landing-page.component';
import { RemitLoginFormComponent } from './components/remit-login-form/remit-login-form.component';
import { RemitExchangeFormComponent } from './components/remit-exchange-form/remit-exchange-form.component';
import { RemitAdminComponent } from './components/remit-admin/remit-admin.component';

const routes: Routes = [
  {path : "register", component : RemitRegisterFormComponent },
  {path : "", component : RemitLandingPageComponent},
  {path : "login", component : RemitLoginFormComponent},
   {path : "exchange", component : RemitExchangeFormComponent},
  {path : "admin", component : RemitAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
