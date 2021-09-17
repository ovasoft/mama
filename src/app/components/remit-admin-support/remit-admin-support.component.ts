import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'remit-admin-support',
  templateUrl: './remit-admin-support.component.html',
  styles: [
  ]
})
export class RemitAdminSupportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  supports: any[] = [
  {id : "009",type:"inquiry",status:"open",thread : [{timestamp:"",creator:"",message:"hello"}]},
  {id : "002",type:"inquiry",status:"close",thread : [{timestamp:"",creator:"",message:"hey"}]}
  ]

  headings = ["id","type","status","last message"];

  support: any = {}

  onClick(support : any){
    this.support = {... support};
  }

  cancel(){
    this.support = {}
  }

  editSupport(formValues:any){
    var curSp = this.supports.find(fu=> fu.id === this.support.id)
    curSp.status = formValues.status;
    curSp.thread.push({timestamp:"",creator:"",message:formValues.message})
    this.support = {}
  }

}
