import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppComponent } from './app.component';
import { TimeSeriesChartComponent } from './components/time-series-chart/time-series-chart.component';
import { UserInputChartComponent } from './components/user-input-chart/user-input-chart.component';
import { QuickChatComponent } from './components/quick-chat/quick-chat.component';
import { SOCKET_URL } from './services/socket-service.service';

@NgModule({
  declarations: [
    AppComponent,
    TimeSeriesChartComponent,
    UserInputChartComponent,
    QuickChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule
  ],
  // providers: [{ provide: SOCKET_URL, useValue: "http://localhost:5000" }  
  providers: [{ provide: SOCKET_URL, useValue: "https://glacial-sierra-54178.herokuapp.com/" }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
