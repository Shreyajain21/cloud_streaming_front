import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { PasswordComponent } from './password/password.component';
import { PaymentsComponent } from './payments/payments.component';
import { SocialAlertsComponent } from './social-alerts/social-alerts.component';
import { EmailnotifactionComponent } from './emailnotifaction/emailnotifaction.component';
import { Emailnot2Component } from './emailnot2/emailnot2.component';
import { UserComponent } from './user/user.component';
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
  } ,
  {
    path: 'emailnotifaction', component: EmailnotifactionComponent
  },
  {
    path: 'emailnot2', component: Emailnot2Component
  },
  {
    path: 'user', component: UserComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
