import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatAppRoutingModule } from './chat-app-routing.module';
import { ChatAppComponent } from './chat-app/chat-app.component';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  declarations: [
    ChatAppComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    ChatAppRoutingModule
  ]
})
export class ChatAppModule { }
