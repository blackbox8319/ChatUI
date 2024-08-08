import { Component, OnInit } from '@angular/core';



interface Message {
  userId: number;
  text: string;
  isBot: boolean;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  messages: Message[] = [];
  newMessage: string = '';
  currentUser = { id: 1 };

  sendMessage(): void {
    if (this.newMessage.trim()) {
      // User's message
      this.messages.push({
        userId: this.currentUser.id,
        text: this.newMessage.trim(),
        isBot: false
      });

      // Bot's response
      this.messages.push({
        userId: this.currentUser.id,
        text: 'Thank you for contacting us',
        isBot: true
      });

      this.newMessage = '';
    }
  }
}
