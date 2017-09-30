import {Component, EventEmitter, Input, OnInit, Output, HostBinding,HostListener} from '@angular/core';
import {cardAnim} from "../../anims/card.anim";

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations: [
    cardAnim
  ],
})
export class ProjectItemComponent implements OnInit {

  @Input() item;
  @Output() onInviteEE = new EventEmitter<void>();
  @Output() onUpdateProjectEE = new EventEmitter<void>();
  @Output() onDeleteProjectEE = new EventEmitter<void>();

  @HostBinding('@card') cardState = 'out';
  @HostListener('mouseenter')
  onMouseEnter(){
    this.cardState = 'hover';
  }
  @HostListener('mouseleave')
  onMouseLeave(){
    this.cardState = 'out';
  }

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
