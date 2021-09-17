import { Component, OnInit } from '@angular/core';
//import {bootstrap} from './node_modules/bootstrap/dist/js/bootstrap'

@Component({
  selector: 'remit-admin-currencies',
  templateUrl: './remit-admin-currencies.component.html',
  styles: [
  ]
})
export class RemitAdminCurrenciesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  currencies:any[] = [
  {id:"009",symbol : "BNB", platforms : [{name: "binance", id : "12345"}], showing:true,
   profitMargin : 0.02, type: "fiat",lastEditedBy : "Shola",imageUrl : "/assets/images/bnb.png" },
  ]

  platforms:any[] = [{name: "binance", id : "12345"},
  {name: "perfectmoney", id : "12345"},{name: "paypal", id : "12345"},
  {name: "kuda", id : "12345"}]

  currencyTypes = ["fiat","crypto"]

  modelCurrency : any = {}

  cl(event: any, currency : any){
    this.modelCurrency = this.expandCurrency(currency);
    console.log(event.target)
   // var tab = new bootstrap.Tab(event.target)
    //this.modelCurrency = {...currency}
  }

  isPlatformUsed(platform : any, currencyPlaforms:any[]){
    return currencyPlaforms.find(plat => platform === plat.name )
  }

  formSubmit(formValues : any){
    console.log("fv" ,formValues)
    let cr = this.currencies.find((c:any)=>c.id === this.modelCurrency.id)
    cr.symbol = formValues.symbol;
    cr.profitMargin = formValues.profitMargin;
    cr.type = formValues.type;
    let pplats = []
    for(let plat of this.platforms){
      if(formValues[plat.name]){ pplats.push(plat)}
    }
    cr.platforms = pplats;

  }

  expandCurrency(cur: any){
    let rc:any = {}
    rc.symbol = cur.symbol;
    rc.profitMargin = cur.profitMargin;
    rc.type = cur.type;
    rc.lastEditedBy = cur.lastEditedBy;
    //rc.imageUrl = cur.imageUrl;
    rc.id = cur.id;
    let cp:any = cur.platforms.map((c:any) => c.name);
    
    for(let plat of this.platforms){
      rc[plat.name] = cp.includes(plat.name)  ;
    }

    return rc;

  }

}
