import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UploadVideosComponent } from './upload-videos/upload-videos.component';
import { VdoRecordingsComponent } from './vdo-recordings/vdo-recordings.component';
import { VideoStorageComponent } from './video-storage/video-storage.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  {
    path:'videoStorage', component:VideoStorageComponent
  },
  {
    path:'uploadVideo', component:UploadVideosComponent
  },
  {
    path:'videos', component:VideosComponent
  },
  // {
  //   path:'videos', component:VideosComponent
  // },
 
  {
    path:'vdoRecordings', component:VdoRecordingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoStorageRoutingModule { }
