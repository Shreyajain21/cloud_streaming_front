import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { DashchannelListComponent } from './dashchannel-list/dashchannel-list.component';
import { InvoicesDueComponent } from './invoices-due/invoices-due.component';
// import { FormsModule } from '@angular/forms';
// import { IgxCalendarModule, IgxSnackbarModule } from 'igniteui-angular';
// import { CalendarModule } from '@syncfusion/ej2-angular-calendars';


@NgModule({
  declarations: [
    // DashboardComponent
  
    DashchannelListComponent,
    InvoicesDueComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    // FormsModule,
    // CalendarModule
    // IgxCalendarModule,
    // IgxSnackbarModule
  ],
  // schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
