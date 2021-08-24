import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelDashboardComponent } from './channel-dashboard/channel-dashboard.component';
import { ChannelSettingsComponent } from './channel-settings/channel-settings.component';
import { CreatePlayerComponent } from './channel-settings/create-player/create-player.component';
import { DashSettingsComponent } from './channel-settings/dash-settings/dash-settings.component';
import { HlsSettingsComponent } from './channel-settings/hls-settings/hls-settings.component';
import { PlayerSettingsComponent } from './channel-settings/player-settings/player-settings.component';
import { RestrictionsComponent } from './channel-settings/restrictions/restrictions.component';
import { RmtpSettingsComponent } from './channel-settings/rmtp-settings/rmtp-settings.component';
import { MultiBitrateComponent } from './multi-bitrate/multi-bitrate.component';
import { DestinationDetailsComponent } from './push-destination/destination-details/destination-details.component';
import { DestinationComponent } from './push-destination/destination/destination.component';
import { PushDestinationComponent } from './push-destination/push-destination.component';
import { ConferenceRecordedFilesComponent } from './recording/conference-recorded-files/conference-recorded-files.component';
import { FlvRecordingComponent } from './recording/flv-recording/flv-recording.component';
import { HlsRecordingComponent } from './recording/hls-recording/hls-recording.component';
import { Mp4RecordingComponent } from './recording/mp4-recording/mp4-recording.component';
import { RecordedFilesComponent } from './recording/recorded-files/recorded-files.component';
import { RecordingComponent } from './recording/recording.component';
import { UploadedFilesComponent } from './recording/uploaded-files/uploaded-files.component';
import { AddPresetComponent } from './transcoding/add-preset/add-preset.component';
import { TranscodingComponent } from './transcoding/transcoding.component';

const routes: Routes = [
  { 
    path:'destination', component:DestinationComponent
  },
  {
    path:'destination-detail', component:DestinationDetailsComponent
  },
  {
    path:'channel-dashboard', component:ChannelDashboardComponent
  },
  {
    path:'push-destination', component:PushDestinationComponent
  },
  {
    path:'recording', component:RecordingComponent
  },
  {
    path:'transcoding', component:TranscodingComponent
  },
  {
    path:'recording/flvRecording', component:FlvRecordingComponent
  },
  {
    path:'recording/hlsRecording', component:HlsRecordingComponent
  },
  {
    path:'recording/mp4Recording', component:Mp4RecordingComponent
  },
  {
    path:'recording/recordedFiles', component:RecordedFilesComponent
  },
  {
    path:'recording/uploadedFiles', component:UploadedFilesComponent
  },
  {
    path:'recording/confRecordeFiles', component:ConferenceRecordedFilesComponent
  },
  {
    path:'preset', component:AddPresetComponent
  },
  {
  path:'multi-bitrate',component:MultiBitrateComponent
  },
  {
    path:'channel-settings', component:ChannelSettingsComponent
  },
  //channel Settings
  {
    path:'channel-settings/rtmpSettings', component:RmtpSettingsComponent
  },
  {
    path:'channel-settings/hlsSettings', component:HlsSettingsComponent
  },
  {
    path:'channel-settings/dashSettings', component:DashSettingsComponent
  },
  {
    path:'channel-settings/restrictions', component:RestrictionsComponent
  },
  {
    path:'channel-settings/playerSettings', component:PlayerSettingsComponent
  },
  {
    path:'channel-settings/createPlayer', component:CreatePlayerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageChannelsRoutingModule { }
