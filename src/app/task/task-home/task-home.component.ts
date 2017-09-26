import {Component, OnInit} from '@angular/core';
import {MdDialog} from "@angular/material";
import {NewTaskComponent} from "../new-task/new-task.component";
import {CopyTaskComponent} from "../copy-task/copy-task.component";

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {

  constructor(private dialog: MdDialog) {
  }

  ngOnInit() {
  }

  lists = [
    {
      id: 1,
      name: '待办',
      tasks: [
        {
          id: 1,
          desc: '任务一：去星巴克买咖啡',
          completed: false,
          reminder: true,
          priority: 1,
          owner: {
            id: 1,
            name: '张三',
            avator: 'avatars:svg-11'
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: '任务二：完成老板布置的 ppt 作业',
          completed: false,
          reminder: false,
          priority: 2,
          owner: {
            id: 1,
            name: '李四',
            avator: 'avatars:svg-12'
          },
          dueDate: new Date(),
        },
        {
          id: 3,
          desc: '任务三：去星巴克买咖啡',
          completed: false,
          priority: 3,
          reminder: true,
          owner: {
            id: 1,
            name: '王五',
            avator: 'avatars:svg-13'
          },
          dueDate: new Date(),
        },
      ],
    },
    {
      id: 2,
      name: '进行中',
      tasks: [
        {
          id: 1,
          desc: '任务四：指定项目计划',
          completed: false,
          reminder: false,
          priority: 2,
          owner: {
            id: 1,
            name: '赵六',
            avator: 'avatars:svg-14'
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: '任务五：检查项目进度',
          completed: false,
          reminder: true,
          priority: 3,
          owner: {
            id: 1,
            name: '孙七',
            avator: 'avatars:svg-15'
          },
          dueDate: new Date(),
        },

      ],
    },
    {
      id: 3,
      name: '已结束',
      tasks: [
        {
          id: 1,
          desc: '任务六：交付项目',
          completed: true,
          reminder: false,
          priority: 1,
          owner: {
            id: 1,
            name: '周八',
            avator: 'avatars:svg-16'
          },
          dueDate: new Date(),
        }
      ],
    },
  ];

  openNewTaskListDialog() {
  }

  openNewTaskDialog() {
    this.dialog.open(NewTaskComponent,{
      data:{
        title:'新建任务',
        task:null
      }
    });
  }

  openMoveTaskDialog() {
    const dialogRef = this.dialog.open(CopyTaskComponent, {
        data: {
          lists: this.lists
        }
      });
  }

  openUpdateTaskDialog(task) {
    const dialogRef = this.dialog.open(NewTaskComponent,{data:{
      title:'修改任务',
      task:task
    }});
  }
}
