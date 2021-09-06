import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServerdasComponent } from './serverdas/serverdas.component';

const routes: Routes = [
  {
    path:'', component:DashboardComponent
  },
  {
    path: 'serverdas', component: ServerdasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
