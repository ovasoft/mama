import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'remit-admin-header',
  templateUrl: './remit-admin-header.component.html',
  styles: [
  ]
})
export class RemitAdminHeaderComponent implements OnInit {

  constructor() { }

  headerInfo : any = {
    initials : "MO",
    email : "vomolaoye@gmail.com",
    id : "2345674",
    role : "Admin",
    lastLogin : "2021-05-10",
    ip : "123.343.23.21"
  }

 


  ngOnInit(): void {
  }

}
