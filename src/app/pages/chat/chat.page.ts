import {Component, OnInit} from '@angular/core';
import {ChatService} from '../../services/chat.service';
import {Chat} from '../../models/chat';
import * as moment from 'moment';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.css']
})
export class ChatPageComponent implements OnInit {
  public chat_rooms: Chat[];
  public selected_chat: Chat;
  public searchChat: string;

  constructor(private chatService: ChatService) {
    this.searchChat = '';
  }

  ngOnInit(): void {
    this.getChatList();
  }

  private getChatList(): void {
    this.chatService.queryAll().subscribe((data: Chat[]) => {
      this.chat_rooms = data;
    });
  }

  public getChat(chat: Chat): void {
    this.selected_chat = new Chat(chat);
    console.log(this.selected_chat);
  }

  public getTime(time): string {
    return moment(time, 'YYYYMMDD').fromNow();
  }
}
