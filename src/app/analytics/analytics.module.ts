import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RegionComponent } from './region/region.component';
import { VideoComponent } from './video/video.component';
import { DateComponent } from './date/date.component';
import { SourceComponent } from './source/source.component';
import { ChartsModule } from 'ng2-charts';
import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  declarations: [
    RegionComponent,
    VideoComponent,
    DateComponent,
    SourceComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AnalyticsRoutingModule,
    ChartsModule,
    HighchartsChartModule
  ]
})
export class AnalyticsModule { }
