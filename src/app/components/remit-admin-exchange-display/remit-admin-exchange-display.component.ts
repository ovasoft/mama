import { Component, OnInit } from '@angular/core';
import {  Chart, ChartType,ChartDataSets, ChartOptions} from 'chart.js';
import { MultiDataSet, Label  } from 'ng2-charts';


@Component({
  selector: 'remit-admin-exchange-display',
  templateUrl: './remit-admin-exchange-display.component.html',
  styles: [
  ]
})
export class RemitAdminExchangeDisplayComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
    
  }
   
  rawData:{[key:string]:any}= {
    all : {
      "label" : ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
      "dataset" : [540, 130, 70]
    },
    ongoing : {
      "label" : ['Download Sale', 'In-Store Sale', 'Mail-Order Sales'],
      "dataset" : [900, 130, 70]
    },
    captured : {
      "label" : ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
      "dataset" : [240, 130, 70]
    },
    completed : {
      "label" : ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
      "dataset" : [540, 130, 270]
    },
    stale : {
      "label" : ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
      "dataset" : [140, 330, 470]
    }
  }

  tabs = Object.keys(this.rawData);
   
  active: string = "all"
  totalExchanges = this.rawData[this.active]['dataset'].reduce((a:number,b:number)=>a+b,0);
  turnOver = (0.02*this.totalExchanges)+this.totalExchanges
  public doughnutChartLabels: Label[] = this.rawData[this.active]['label'];
  public doughnutChartData: MultiDataSet = [ this.rawData[this.active]['dataset'] ];

  public doughnutChartType: ChartType = 'doughnut';


  

  tabClick(tab : string){
    this.active = tab;
    this.doughnutChartLabels = this.rawData[this.active]['label'];
    this.doughnutChartData = [ this.rawData[this.active]['dataset'] ];
    this.totalExchanges = this.rawData[this.active]['dataset'].reduce((a:number,b:number)=>a+b,0);
    this.turnOver = (0.02*this.totalExchanges)+this.totalExchanges
  }

}
