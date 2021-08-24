import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatAppComponent } from './chat-app/chat-app.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  {
    path:'chatApp', component:ChatAppComponent
  },
  {
    path:'chat', component:ChatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatAppRoutingModule { }
