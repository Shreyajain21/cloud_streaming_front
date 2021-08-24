import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoStorageRoutingModule } from './video-storage-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { VideoStorageComponent } from './video-storage/video-storage.component';
import { UploadVideosComponent } from './upload-videos/upload-videos.component';
import { VideosComponent } from './videos/videos.component';
import { VdoRecordingsComponent } from './vdo-recordings/vdo-recordings.component';
import { RecordingsComponent } from './recordings/recordings.component';

@NgModule({
  declarations: [
    VideoStorageComponent,
    UploadVideosComponent,
    VideosComponent,
    VdoRecordingsComponent,
    RecordingsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    VideoStorageRoutingModule,
    HttpClientModule,
  ]
})
export class VideoStorageModule { }
