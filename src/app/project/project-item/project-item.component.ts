import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

  @Input() item;
  @Output() onInviteEE = new EventEmitter<void>();
  @Output() onUpdateProjectEE = new EventEmitter<void>();
  @Output() onDeleteProjectEE = new EventEmitter<void>();


  constructor() {
  }

  ngOnInit() {
  }

  onInvite() {
    this.onInviteEE.emit();
  }

  onUpdateProject() {
    this.onUpdateProjectEE.emit();
  }

  onDeleteProject() {
    this.onDeleteProjectEE.emit();
  }
}
