import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';
import {DragDropService} from "../drag-drop.service";

@Directive({
  selector: '[app-draggable][dragTag][dragData][draggedClass]'
})
export class DragDirective {
  constructor(private er: ElementRef, private rd2: Renderer2,private service:DragDropService) {
  }

  private _isDragable = false;
  get isDragable(): boolean {
    return this._isDragable;
  }
  @Input('app-draggable')
  set isDragable(value: boolean) {
    this._isDragable = value;
    this.rd2.setAttribute(this.er.nativeElement,'draggable',`${value}`)
  }


  @Input() draggedClass:string;
  @Input() dragTag:string;
  @Input() dragData:any;

  @HostListener('dragstart', ['$event'])
  onDragStartEvent(ev: Event) {
    if (this.er.nativeElement === ev.target) {
      this.rd2.addClass(this.er.nativeElement,this.draggedClass);
      this.service.setDragData({tag:this.dragTag,data:this.dragData})
    }
  }

  @HostListener('dragend', ['$event'])
  onDragEnd(ev: Event) {
    this.rd2.removeClass(this.er.nativeElement,this.draggedClass);
  }

}
