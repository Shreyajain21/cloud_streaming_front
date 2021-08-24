import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard/dashboard.component';
import { UiSwitchModule } from 'ngx-ui-switch';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TopbarComponent } from '../topbar/topbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [SidebarComponent,TopbarComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule,
    UiSwitchModule,
    HttpClientModule,
    ChartsModule,
  ],
  exports: [ CommonModule, TopbarComponent, FormsModule, SidebarComponent,DashboardComponent]
})
export class SharedModule { }
