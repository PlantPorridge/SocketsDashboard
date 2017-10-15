import { Injectable, Injector, InjectionToken, Inject } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

export let SOCKET_URL = new InjectionToken<string>('socketUrl');

@Injectable()
export class SocketService {

  constructor(@Inject(SOCKET_URL) private url: any){
    if(!url){
      console.warn("No SOCKET_URL provided.");
    } else {
      this.serverUrl = url;      
    }
  }

  private serverUrl = 'http://localhost:5000';
  private socket;

  incrementUserWalk() {
    this.socket.emit('increment-walk');
  }

  decrementUserWalk() {
    this.socket.emit('decrement-walk');
  }

  sendNewMessage(message: string) {
    this.socket.emit('add-message', message);
  }

  private connectSocket() {
    if (!this.socket) {
      this.socket = io(this.serverUrl);
    }
  }

  getObservable(listenTo: string[], initialEmit?: string) {
    let observable = new Observable(observer => {

      this.connectSocket();

      listenTo.forEach(listenValue => {
        this.socket.on(listenValue, (data) => {
          observer.next(data);
        });
      });

      if(initialEmit != null){
        this.socket.emit(initialEmit);
      }

      return () => {
        this.socket.disconnect();
      };

    })
    return observable;
  }  
}