import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignalRService {
  private hubConnection!: signalR.HubConnection;
  public progress = new BehaviorSubject<number>(0);

  constructor() {
    this.startConnection();
    this.addProgressListener();
  }

  private startConnection() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://signalr-production.up.railway.app/progressHub', {
        withCredentials: false,
      })
      .build();

    this.hubConnection
      .start()
      .catch(err => console.log('Error while starting connection: ' + err));
  }

  private addProgressListener() {
    this.hubConnection.on('ReceiveProgressUpdate', (progress: number) => {
      console.log(progress);

      this.progress.next(progress);
    });
  }
}
