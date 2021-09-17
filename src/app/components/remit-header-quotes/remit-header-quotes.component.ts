import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'remit-header-quotes',
  templateUrl: './remit-header-quotes.component.html',
  styles: [
  ]
})
export class RemitHeaderQuotesComponent implements OnInit {

  constructor() { }
  //@Input() quoteData;
  quoteData = {
    pair : "BNB/USD",
    change : 2.0,
    price : 450.0,
    exchangeRate : 451.0
  }

  getClass(){
    return this.quoteData.price>0;
  }


  ngOnInit(): void {
  }

}
