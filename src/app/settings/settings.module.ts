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


@NgModule({
  declarations: [
    AccountComponent,
    PasswordComponent,
    PaymentsComponent,
    SocialAlertsComponent
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
