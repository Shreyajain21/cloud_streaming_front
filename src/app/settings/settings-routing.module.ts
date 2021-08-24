import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { PasswordComponent } from './password/password.component';
import { PaymentsComponent } from './payments/payments.component';
import { SocialAlertsComponent } from './social-alerts/social-alerts.component';

const routes: Routes = [
  {
    path:'account', component:AccountComponent
  },
  {
    path:'password', component:PasswordComponent
  },
  {
    path:'payments', component:PaymentsComponent
  },
  {
    path:'social-alerts', component:SocialAlertsComponent
  } 
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
