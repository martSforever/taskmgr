import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {

  constructor() {
  }

  items = [
    {id: 1, name: 'ambzer'},
    {id: 2, name: 'rose'},
    {id: 3, name: 'marts'},
  ];

  ngOnInit() {

  }

  onSave(){

  }

  displayUser(user:{id:string,name:string}) {
    return user ? user.name : 'no name!';
  }

}
