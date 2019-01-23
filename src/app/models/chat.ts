import {Message} from './message';

export class Chat {
  id: string;
  name: string;
  createdAt: string;
  messages: Message[];

  constructor(data?: Chat) {
    if (data) {
      Object.assign(this, data);
    }
  }

}
