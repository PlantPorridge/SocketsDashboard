import { Component, OnInit } from '@angular/core';
import { TimeSeriesChartComponent } from '../time-series-chart/time-series-chart.component';
import { SocketService } from '../../services/socket-service.service';

@Component({
  selector: 'app-user-input-chart',
  templateUrl: './user-input-chart.component.html',
  styleUrls: ['./user-input-chart.component.css']
})
export class UserInputChartComponent extends TimeSeriesChartComponent {

  constructor(private socketService: SocketService) {
    super();
  }

  increment(){
    this.socketService.incrementUserWalk();
  }

  decrement(){
    this.socketService.decrementUserWalk();
  }
  // ngOnInit() {
  // }

}
