import {Component, OnInit} from '@angular/core';
import {MdDialog} from "@angular/material";
import {NewProjectComponent} from "../new-project/new-project.component";
import {InviteComponent} from "../invite/invite.component";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects = [
    {
      "name": "企业级协作平台",
      "desc": "这是一个企业内部项目",
      "coverImg": "assets/img/covers/0.jpg"
    },
    {
      "name": "自动化测试项目",
      "desc": "这是一个企业内部项目",
      "coverImg": "assets/img/covers/1.jpg"
    },
  ];

  constructor(private dialog: MdDialog) {
  }

  ngOnInit() {
  }

  openNewProjectDialog() {
    /*传入一个模板或者一个组件，这里是传入一个组件*/
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {"dark": true}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  openInviteDialog(){
    const dialogRef = this.dialog.open(InviteComponent);
  }

}
