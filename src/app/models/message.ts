export class Message {
  id: string;
  userId: string;
  createdAt: string;
  message: string;
  penFriend: boolean;

  constructor(data?: Message) {
    if (data) {
      Object.assign(this, data);
    }
  }

}
