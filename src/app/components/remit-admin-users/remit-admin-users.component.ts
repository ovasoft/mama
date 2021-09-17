import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'remit-admin-users',
  templateUrl: './remit-admin-users.component.html',
  styles: [
  ]
})
export class RemitAdminUsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users:any[] = [
  {id : "098734", username : "Omolaoye victor",exchanges : 23, supports : 74,email : "va@g.com"},
   {id : "098735", username : "Omolaoye victor",exchanges : 24, supports : 54, email : "va@g.com"},
    {id : "098736", username : "Omolaoye victor",exchanges : 25, supports : 44, email : "va@g.com"},
     {id : "098737", username : "Omolaoye victor",exchanges : 26, supports : 34, email : "va@g.com"}
  ]

  headings = Object.keys(this.users[0]);
  user:any = {};

  editUser(formValues : any){
    var curUser = this.users.find(fu=> fu.id === this.user.id)
    console.log(formValues)
    curUser.email = formValues.email;
    curUser.username = formValues.username;
    this.user = {};
  }

  onClick(user : any){
    //console.log(event.target)
    this.user = {... user};
  }

  cancel(){
    this.user = {}
  }

}
