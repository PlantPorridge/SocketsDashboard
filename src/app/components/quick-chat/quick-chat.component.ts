import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SocketService } from '../../services/socket-service.service';

@Component({
  selector: 'app-quick-chat',
  templateUrl: './quick-chat.component.html',
  styleUrls: ['./quick-chat.component.css']
})
export class QuickChatComponent implements OnInit {

  @Input()
  title: string;
  
  newMessage: string;
  numOfMessagesToShow: number = 5;
  messages: string[] = [];

  constructor(private socketService: SocketService) { }

  ngOnInit() {
  }

  private _datasource: Observable<any>;
  @Input()
  set datasource(value) {
    this._datasource = value;
    this._datasource.subscribe(
      value => {
        this.addMessage(value);
      },
      err => console.log(err)
    )
  }
  get datasource(): Observable<any> {
    return this._datasource;
  }

  private addMessage(message) {
    this.messages.push(message);

    while (this.messages.length > this.numOfMessagesToShow) {
      this.messages.shift();
    }

    console.log(this.messages);
  }

  sendNewMessage(){
    this.socketService.sendNewMessage(this.newMessage);
    this.newMessage = null;
  }

}
