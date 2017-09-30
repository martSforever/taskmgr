import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {itemAnim} from "../../anims/item.anim";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations:[itemAnim],
})
export class TaskItemComponent implements OnInit {

  @Input() item;
  @Output() taskItemEE = new EventEmitter<void>();
  avatar;
  widerPriority = 'out';
  @HostListener('mouseenter')
  onMouseEnter(){
    this.widerPriority = 'in';
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.widerPriority = 'out';
  }

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
