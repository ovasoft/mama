import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'remit-admin-exchanges',
  templateUrl: './remit-admin-exchanges.component.html',
  styles: [
  ]
})
export class RemitAdminExchangesComponent implements OnInit {
  exchanges:any[] = [
      {
        id : "0998573",
      baseCUR : "BNB", 
      quoteCUR : "USD",
      baseAmount : 23, 
      quoteAmount : 74,
      paymentPlatform : "Binance",
      creditPlatform :"Paypal",
      status : "complete",
      externalId : "009987683",
      creditPlatformDetails :"helloo",
    },

    { id : "0998574",
      baseCUR : "BNB", 
      quoteCUR : "USD",
      baseAmount : 23, 
      quoteAmount : 74,
      paymentPlatform : "Binance",
      creditPlatform :"Paypal",
      status : "complete",
      externalId : "009987683",
      creditPlatformDetails :"helloo",
    },

    { id : "0998575",
      baseCUR : "BNB", 
      quoteCUR : "USD",
      baseAmount : 23, 
      quoteAmount : 74,
      paymentPlatform : "Binance",
      creditPlatform :"Paypal",
      status : "complete",
      externalId : "009987683",
      creditPlatformDetails :"helloo",
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  headings = Object.keys(this.exchanges[0]);
  exchange:any = {};
  filters:any = {
    "binance" : false,"paypal":true,"bnb":false,"complete":false
  }
  filterKeys = Object.keys(this.filters);

  editExchange(formValues : any){
    var curEx = this.exchanges.find(fu=> fu.id === this.exchange.id)
    console.log(formValues)
    for(var item of this.headings){
      curEx[item] = formValues[item]
    }
    this.exchange = {};
  }

  onClick(exchange : any){
    //console.log(event.target)
    this.exchange = {... exchange};
  }

  cancel(){
    this.exchange = {}
  }

}

/*
Fetch data from service with pagination
if there is input, limit with input
*/