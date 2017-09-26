import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss']
})
export class TaskHeaderComponent implements OnInit {

  @Input() header = '?';
  @Output() newTaskEE = new EventEmitter<void>();
  @Output() moveAllTaskEE = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onNewTask(){
    this.newTaskEE.emit();
  }

  onMoveAllTask() {
    this.moveAllTaskEE.emit();
  }
}
