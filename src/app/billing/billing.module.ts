import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingRoutingModule } from './billing-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BillingComponent } from './billing/billing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BillingComponent
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
