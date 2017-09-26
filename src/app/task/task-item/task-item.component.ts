import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() item;
  @Output() taskItemEE = new EventEmitter<void>();
  avatar;

  constructor() {
  }

  ngOnInit() {
    this.avatar = this.item.owner ? this.item.owner.avator : 'unassigned';
  }

  onItem() {
    this.taskItemEE.emit();
  }

  onCheckItem(ev:Event) {
    /*停止传播，放置复选框按钮点击事件触发任务项点击事件（修改任务）*/
    ev.stopPropagation();
  }
}
