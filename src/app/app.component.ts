import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SocketService } from './services/socket-service.service';

@Component({
  selector: 'socket-dashboard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SocketService]
})
export class AppComponent {

  connection;

  constructor(private chatService: SocketService) { }

  walkObservable: Observable<{}>;
  sineObservable: Observable<{}>;
  cosineObservable: Observable<{}>;
  tanObservable: Observable<{}>;
  userWalkObservable: Observable<{}>;
  quickChatObservable: Observable<{}>;

  ngOnInit() {
    this.walkObservable = this.chatService.getObservable(['walk-value']);
    this.sineObservable = this.chatService.getObservable(['sine-value']);
    this.cosineObservable = this.chatService.getObservable(['cosine-value']);
    this.tanObservable = this.chatService.getObservable(['tangent-value']);
    this.userWalkObservable = this.chatService.getObservable(['user-walk-value']);
    this.quickChatObservable = this.chatService.getObservable(['quick-chat-message'], 'get-message-history');
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
