import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageChannelsRoutingModule } from './manage-channels-routing.module';
import { RecordingComponent } from './recording/recording.component';
import { FlvRecordingComponent } from './recording/flv-recording/flv-recording.component';
import { Mp4RecordingComponent } from './recording/mp4-recording/mp4-recording.component';
import { HlsRecordingComponent } from './recording/hls-recording/hls-recording.component';
import { RecordedFilesComponent } from './recording/recorded-files/recorded-files.component';
import { TranscodingComponent } from './transcoding/transcoding.component';
import { AddPresetComponent } from './transcoding/add-preset/add-preset.component';
import { UpdatePresetComponent } from './transcoding/update-preset/update-preset.component';
import { MultiBitrateComponent } from './multi-bitrate/multi-bitrate.component';
import { ChannelSettingsComponent } from './channel-settings/channel-settings.component';
import { ChannelDashboardComponent } from './channel-dashboard/channel-dashboard.component';
import { PushDestinationComponent } from './push-destination/push-destination.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UiSwitchModule } from 'ngx-ui-switch';
import { DestinationComponent } from './push-destination/destination/destination.component';
import { SharedModule } from '../shared/shared.module';
import { ConferenceRecordedFilesComponent } from './recording/conference-recorded-files/conference-recorded-files.component';
import { UploadedFilesComponent } from './recording/uploaded-files/uploaded-files.component';
import { PlayerSettingsComponent } from './channel-settings/player-settings/player-settings.component';
import { DashSettingsComponent } from './channel-settings/dash-settings/dash-settings.component';
import { CreatePlayerComponent } from './channel-settings/create-player/create-player.component';
import { RestrictionsComponent } from './channel-settings/restrictions/restrictions.component';
import { RmtpSettingsComponent } from './channel-settings/rmtp-settings/rmtp-settings.component';
import { HlsSettingsComponent } from './channel-settings/hls-settings/hls-settings.component';
import { DestinationDetailsComponent } from './push-destination/destination-details/destination-details.component';

@NgModule({
  declarations: [
    RecordingComponent,
    FlvRecordingComponent,
    Mp4RecordingComponent,
    HlsRecordingComponent,
    RecordedFilesComponent,
    TranscodingComponent,
    AddPresetComponent,
    UpdatePresetComponent,
    MultiBitrateComponent,
    ChannelSettingsComponent,
    ChannelDashboardComponent,
    HlsSettingsComponent,
    PushDestinationComponent,
    DestinationComponent,
    ConferenceRecordedFilesComponent,
    UploadedFilesComponent,
    PlayerSettingsComponent,
    DashSettingsComponent,
    CreatePlayerComponent,
    RestrictionsComponent,
    RmtpSettingsComponent,
    DestinationDetailsComponent,
  ],
  imports: [
    CommonModule,
    ManageChannelsRoutingModule,
    ReactiveFormsModule,
    UiSwitchModule,
    HttpClientModule,
    SharedModule
  ],
  bootstrap: [RecordingComponent]
})
export class ManageChannelsModule { }
