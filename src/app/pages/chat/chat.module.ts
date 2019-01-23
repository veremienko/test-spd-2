import {NgModule} from '@angular/core';
import {ChatRoutingModule} from './chat-routing.module';
import {ChatPageComponent} from './chat.page';
import {ChatService} from '../../services/chat.service';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FilterPipe} from '../../pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ChatRoutingModule,
  ],
  providers: [
    ChatService
  ],
  declarations: [
    ChatPageComponent,
    FilterPipe
  ]
})
export class ChatModule {
}
