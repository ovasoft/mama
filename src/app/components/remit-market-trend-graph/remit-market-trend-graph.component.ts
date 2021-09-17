import { Component, OnInit } from '@angular/core';
import {  Chart, ChartType,ChartDataSets, ChartOptions} from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';

@Component({
  selector: 'remit-market-trend-graph',
  templateUrl: './remit-market-trend-graph.component.html',
  styles: [
  ]
})
export class RemitMarketTrendGraphComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public lineChartOptions: (ChartOptions) = {
    responsive: true,
    elements: {
                    point:{
                        radius: 0
                    }},
    scales: {
        xAxes: [{
            gridLines: {
                display:false
            }
        }],
        yAxes: [{
            gridLines: {
                display:false
            },
            ticks: {
                display: false
            }   
        }]
    }
  };

  public lineChartLabels = ['', '', '', '', '', '', ''];

  public lineChartLegend = false;
  public lineChartType: ChartType = 'line';

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40] }
  ];
  public lineChartColors: Color[] = [
    { // red
      backgroundColor: 'rgba(0,0,255,0.3)',
      borderColor: 'blue'
      
    }
  ];
 

}
