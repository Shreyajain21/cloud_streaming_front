import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddChannelComponent } from './add-channel/add-channel.component';
import { ChannelComponent } from './channel/channel.component';
import { EditChannelComponent } from './edit-channel/edit-channel.component';
import { ListChannelComponent } from './list-channel/list-channel.component';

const routes: Routes = [
  {
    path:'channel', component:ChannelComponent
  },
  {
    path:'editChannel',component:EditChannelComponent
  },   
  {
    path:'createChannel',component:AddChannelComponent
  },
  {
    path:'getChannelList',component:ListChannelComponent  
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChannelRoutingModule { }
