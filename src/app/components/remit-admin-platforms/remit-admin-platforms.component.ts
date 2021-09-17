import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'remit-admin-platforms',
  templateUrl: './remit-admin-platforms.component.html',
  styles: [
  ]
})
export class RemitAdminPlatformsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  platforms : any[] = [
    {id: "009", name : "paypal", url :"paypal url",
     requiredPaymentDetail: ["Bank","account number"], lastEditedBy:"Shole"},
    {id: "010", name : "paypal", url :"paypal url", 
    requiredPaymentDetail: ["Bank","account number"], lastEditedBy:"Ade"}
  ]

  headings = Object.keys(this.platforms[0]);
  platform : any = {}

  cancel(){
    this.platform = {};
  }

  editPlatform(formValues:any){
    var curPlat = this.platforms.find(fu=> fu.id === this.platform.id)
    console.log(formValues)
    for(var item of this.headings){
      curPlat[item] = formValues[item]
    }
    this.platform = {};
  }

  onClick(plat:any){
    this.platform = {... plat};
  }

}
