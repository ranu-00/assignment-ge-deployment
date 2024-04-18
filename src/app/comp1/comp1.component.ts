import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  @Output() notification: EventEmitter<string> = new EventEmitter<string>();
 
  count: number = 0;

  constructor(private sharedDataService: SharedServiceService) { }

  ngOnInit(): void {
    this.fetchData();
  }
  data: any;
  fetchData() {
    this.sharedDataService.fetchData().subscribe(data => {
      this.data = data[0];
    });
  }

  incrementCount() {
    this.count++;
  }

  sendNotification(sco:number) {
    if(sco == null)
    sco=-1;
    this.notification.emit('Hello from Component '+sco);
  }

  
  get sharedValue(): string {
    return this.sharedDataService.sharedValue;
  }
}
