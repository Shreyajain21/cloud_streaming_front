import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelRoutingModule } from './channel-routing.module';
import { AddChannelComponent } from './add-channel/add-channel.component';
import { EditChannelComponent } from './edit-channel/edit-channel.component';
import { ListChannelComponent } from './list-channel/list-channel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { UiSwitchModule } from 'ngx-ui-switch';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChannelComponent } from './channel/channel.component';

@NgModule({
  declarations: [
    AddChannelComponent,
    EditChannelComponent,
    ListChannelComponent,
    ChannelComponent
  ],
  imports: [
    CommonModule,
    ChannelRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    UiSwitchModule,
    HttpClientModule,
    // NgbModule
  ]
})
export class ChannelModule { }
