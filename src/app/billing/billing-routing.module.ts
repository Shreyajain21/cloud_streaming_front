import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingComponent } from './billing/billing.component';
import { BillingsettingsComponent } from './billingsettings/billingsettings.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { ServerdashboardComponent } from './serverdashboard/serverdashboard.component';
import { AddmindashboardComponent } from './addmindashboard/addmindashboard.component';

const routes: Routes = [
  {
    path:'billing',component:BillingComponent
  },
  {
    path: 'billingsettings', component: BillingsettingsComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'serverdashboard', component: ServerdashboardComponent
  },
  {
    path: 'addmindashboard', component: AddmindashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingRoutingModule { }
