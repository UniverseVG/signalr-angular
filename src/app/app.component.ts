import { Component, OnInit } from '@angular/core';
import { SignalRService } from './signalr.service';
import { ProcessService } from './upload.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'SignalR Demo';
  progress = 0;

  constructor(
    private processService: ProcessService,
    private signalRService: SignalRService
  ) {}

  ngOnInit(): void {
    // Subscribe to progress updates from SignalR
    this.signalRService.progress.subscribe(progress => {
      this.progress = progress;
    });
  }

  startProcess(): void {
    // Trigger the process in the API
    this.processService.startProcess().subscribe(
      data => console.log(data),
      error => console.error('Error starting process', error)
    );
  }
}
