import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DateComponent } from './date/date.component';
import { RegionComponent } from './region/region.component';
import { SourceComponent } from './source/source.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  {
    path:'date', component:DateComponent
  },
  {
    path:'region', component:RegionComponent
  },
  {
    path:'video', component:VideoComponent
  },
  {
    path:'source', component:SourceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalyticsRoutingModule { }
