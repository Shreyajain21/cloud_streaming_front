import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './event/event.component';
import { ScheduleEventComponent } from './schedule-event/schedule-event.component';
import { UpgradeComponent } from './upgrade/upgrade.component';

const routes: Routes = [
  {
    path:'event', component:EventComponent
  },
  {
    path:'scheduleEvent', component:ScheduleEventComponent
  },
  {
    path:'upgrade', component:UpgradeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
