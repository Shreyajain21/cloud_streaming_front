import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EventComponent } from './event/event.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { ScheduleEventComponent } from './schedule-event/schedule-event.component';


@NgModule({
  declarations: [
    EventComponent,
    UpgradeComponent,
    ScheduleEventComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class EventsModule { }
