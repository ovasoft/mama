import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'remit-admin-nav',
  templateUrl: './remit-admin-nav.component.html',
  styles: [
  ]
})
export class RemitAdminNavComponent implements OnInit {
  public navigations = [
  {nav : "Dashboard", iconClass : "fas fa-user mx-2",overed : false, active: true},
  {nav : "Users", iconClass : "fas fa-users-cog mx-2",overed : false,active: false},
  {nav : "Exchanges", iconClass:"fas fa-exchange-alt mx-2",overed : false, active: false},
  {nav : "Supports", iconClass:"fas fa-ticket-alt mx-2",overed : false, active: false},
  {nav : "Currencies", iconClass:"fas fas fa-coins mx-2",overed : false, active: false},
  {nav : "Platforms", iconClass:"fas fa-cash-register mx-2",overed : false, active: false}
  ]

  constructor() { }
  activeTab : any = this.navigations[0];

  @Output() tabClicked = new EventEmitter()

  public toggle(nav : any){
    nav.overed = !nav.overed;
  }

  public onClick(nav : any){
    if(this.activeTab.nav === nav.nav){ return}
    this.activeTab.active = false;
    nav.active = true;
    this.activeTab = nav;
    this.tabClicked.emit(nav)
  }

  ngOnInit(): void {
  }

}
