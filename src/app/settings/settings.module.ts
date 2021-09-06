import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { AccountComponent } from './account/account.component';
import { PasswordComponent } from './password/password.component';
import { PaymentsComponent } from './payments/payments.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { SocialAlertsComponent } from './social-alerts/social-alerts.component';
import { EmailnotifactionComponent } from './emailnotifaction/emailnotifaction.component';
import { Emailnot2Component } from './emailnot2/emailnot2.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AccountComponent,
    PasswordComponent,
    PaymentsComponent,
    SocialAlertsComponent,
    EmailnotifactionComponent,
    Emailnot2Component,
    UserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SettingsRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SettingsModule { }
