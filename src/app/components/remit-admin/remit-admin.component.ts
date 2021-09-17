import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'remit-admin',
  templateUrl: './remit-admin.component.html',
  styles: [
  ]
})
export class RemitAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onTabClick(event : any){
    console.log(event)
  }

}
