import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'remit-nav',
  templateUrl: './nav.component.html',
  styles: [
  ]
})
export class NavComponent implements OnInit {

  constructor() { }
  menuItems = [
    {"name" : "Get Crypto","url":"#","decoration":"NGN"},
    {"name" : "Get Fiat","url":"#"},
    {"name" : "Track","url":"#"},
    {"name" : "Rates","url":"#"},
    {"name" : "Masked","url":"#","decoration":"+2%"}
  ]

  userMenuActions = [
  {"name" : "Login","url":"#","visible":true},
    {"name" : "Register","url":"#","active":true,"visible":true},
     {"name" : "Logout","url":"#","visible":false},
      {"name" : "User","url":"#","visible" : false},
  ]

  brandName = "RemitEx";
  imageUrl = "/assets/images/remits.svg";

  ngOnInit(): void {
  }

}
