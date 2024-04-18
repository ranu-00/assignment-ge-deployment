import { Component } from '@angular/core';
import { SharedServiceService } from './shared-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment-app';

  receivedNotification: string = '';

  receiveNotification(notification: string) {
    this.receivedNotification = notification;
  }
  constructor(private sharedDataService: SharedServiceService) { }
  
  updateSharedValue(newValue: string) {
    this.sharedDataService.sharedValue = newValue;
  }
}
