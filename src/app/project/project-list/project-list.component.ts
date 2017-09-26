import {Component, OnInit} from '@angular/core';
import {MdDialog} from "@angular/material";
import {NewProjectComponent} from "../new-project/new-project.component";
import {InviteComponent} from "../invite/invite.component";
import {ConfirmDialogComponent} from "../../shared/confirm-dialog/confirm-dialog.component";

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
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {
      project:null,
      title:'新建项目'
    }});
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        console.log('确定新建项目');
      }else {
        console.log('取消新建项目');
      }
    });
  }

  openInviteDialog(){
    const dialogRef = this.dialog.open(InviteComponent);
  }

  openUpdateProjectDialog(project) {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {
      project:project,
      title:'修改项目'
    }});
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        console.log('确定修改项目');
      }else {
        console.log('取消修改项目');
      }
    });
  }

  openDeleteProjectDialog(project) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {
      title:'删除项目',
      content:'您确定要删除项目：“'+project.name+'”吗？'
    }});
    dialogRef.afterClosed().subscribe(result => {
      if(result) console.log('删除项目：'+project.name);
      else console.log('取消删除项目...');
    });
  }
}
