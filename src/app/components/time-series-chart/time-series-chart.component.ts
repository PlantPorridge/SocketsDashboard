import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-time-series-chart',
  templateUrl: './time-series-chart.component.html',
  styleUrls: ['./time-series-chart.component.css']
})
export class TimeSeriesChartComponent implements OnInit {


  @Input() title: string;
  @Input() minY: number;
  @Input() maxY: number;
  @Input() stepped: boolean = false;

  private _numOfXValues: number;
  @Input()
  set numOfXValues(value) {
    this._numOfXValues = value;
    this.configureLabels(this._numOfXValues);
  }
  get numOfXValues(): number {
    return this._numOfXValues;
  }

  private _datasource: Observable<any>;
  @Input()
  set datasource(value) {
    this._datasource = value;
    this._datasource.subscribe(
      value => {
        this.addValue(value);
      },
      err => console.log(err)
    )
  }
  get datasource(): Observable<any> {
    return this._datasource;
  }

  values = [];

  ngOnInit() {
    if(this.minY) this.lineChartOptions.scales.yAxes[0].ticks.min = this.minY;
    if(this.maxY) this.lineChartOptions.scales.yAxes[0].ticks.max = this.maxY;
    this.lineChartOptions.elements.line.stepped = this.stepped;
  }

  private addValue(value) {
    this.values.push(value);

    while (this.values.length > this.numOfXValues) {
      this.values.shift();
    }

    this.lineChartData = [
      { data: this.values.map(v => v.value) }
    ];
  }

  private configureLabels(size: number) {
    let labelArray = [];
    labelArray.length = size;
    this.lineChartLabels = labelArray.fill('');
  }

  public lineChartData: Array<any> = [
    { data: [], label: '' }
  ];

  public lineChartLabels: Array<any>;
  public lineChartOptions: any = {
    responsive: true,
    animation: {
      duration: 0
    },
    scales: {
      yAxes: [{
        ticks: {
          suggestedMin: -10,
          suggestedMax: 10
        },
        gridLines: {
          drawOnChartArea: false
        }
      }],
      xAxes: [{
        gridLines: {
          drawOnChartArea: false
        }
      }]
    },
    elements: {
      line: {
        fill: false,
        stepped: false
      },
      point: {
        radius: 0
      }
    }
  };

  public lineChartLegend: boolean = false;
  public lineChartType: string = 'line';

}
