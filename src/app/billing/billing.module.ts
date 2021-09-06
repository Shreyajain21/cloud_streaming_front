import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingRoutingModule } from './billing-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BillingComponent } from './billing/billing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BillingsettingsComponent } from './billingsettings/billingsettings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServerdashboardComponent } from './serverdashboard/serverdashboard.component';
import { AddmindashboardComponent } from './addmindashboard/addmindashboard.component';

@NgModule({
  declarations: [
    BillingComponent,
    BillingsettingsComponent,
    DashboardComponent,
    ServerdashboardComponent,
    AddmindashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BillingRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BillingModule { }
