import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'dashboard', 
    loadChildren:() =>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {
    path:'',
    loadChildren:() =>import('./admin/admin.module').then(m=>m.AdminModule)
  },
{
  path:'channel', 
  loadChildren:() =>import('./channel/channel.module').then(m=>m.ChannelModule)
},
{
  path:'events', 
  loadChildren:() =>import('./events/events.module').then(m=>m.EventsModule)
},
{
  path:'manage-channel', 
  loadChildren:() =>import('./manage-channels/manage-channels.module').then(m=>m.ManageChannelsModule)
},
{
  path:'billing', 
  loadChildren:() =>import('./billing/billing.module').then(m=>m.BillingModule)
},
{
  path:'settings', 
  loadChildren:() =>import('./settings/settings.module').then(m=>m.SettingsModule)
},
{
  path:'analytics', 
  loadChildren:() =>import('./analytics/analytics.module').then(m=>m.AnalyticsModule)
},
{
  path:'video-storage', 
  loadChildren:() =>import('./video-storage/video-storage.module').then(m=>m.VideoStorageModule)
},
{
  path:'help-center', 
  loadChildren:() =>import('./help-center/help-center.module').then(m=>m.HelpCenterModule)
},
{
  path:'chat-app', 
  loadChildren:() =>import('./chat-app/chat-app.module').then(m=>m.ChatAppModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
