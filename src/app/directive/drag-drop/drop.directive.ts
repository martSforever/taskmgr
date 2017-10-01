import {Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2} from '@angular/core';
import {DragData, DragDropService} from "../drag-drop.service";

@Directive({
  selector: '[app-droppable][dropTags][dragEnterClass]'
})
export class DropDirective {

  constructor(private er: ElementRef, private rd2: Renderer2,private service :DragDropService) {
    this.data$ = this.service.getDragData().take(1);
  }

  @Input() dragEnterClass:string;
  @Input() dropTags:string[] = [];
  @Output() dropEE = new EventEmitter<DragData>();
  private data$;

  @HostListener('dragenter', ['$event'])
  onDragEnter(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    if (this.er.nativeElement === ev.target) {
      this.data$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd2.addClass(this.er.nativeElement, this.dragEnterClass);
        }
      });
    }
  }

  @HostListener('dragover', ['$event'])
  onDragOver(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    if (this.er.nativeElement === ev.target) {
      this.data$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd2.setProperty(ev, 'dataTransfer.effectAllowed', 'all');
          this.rd2.setProperty(ev, 'dataTransfer.dropEffect', 'move');
        } else {
          this.rd2.setProperty(ev, 'dataTransfer.effectAllowed', 'none');
          this.rd2.setProperty(ev, 'dataTransfer.dropEffect', 'none');
        }
      });
    }
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    if (this.er.nativeElement === ev.target) {
      this.data$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd2.removeClass(this.er.nativeElement, this.dragEnterClass);
        }
      });
    }
  }

  @HostListener('drop', ['$event'])
  onDrop(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    if (this.er.nativeElement === ev.target) {
      this.data$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd2.removeClass(this.er.nativeElement, this.dragEnterClass);
          this.dropEE.emit(dragData);
          this.service.clearDragData();
        }
      });
    }
  }

  /*/!*enter*!/
  @HostListener('dragenter', ['$event'])
    onDragEnter(ev: Event) {
    if (this.er.nativeerement === ev.target) {
      this.rd22.addClass(this.er.nativeerement,this.dragEnterClass);
    }
  }

  /!*over*!/
  @HostListener('dragover', ['$event'])
  onDragOver(ev: Event) {
    if (this.er.nativeerement === ev.target) {
    }
  }

  /!*leave*!/
  @HostListener('dragleave', ['$event'])
  onDragLeave(ev: Event) {
    if (this.er.nativeerement === ev.target) {
      this.rd22.removeClass(this.er.nativeerement,this.dragEnterClass);
    }
  }

  /!*drop*!/
  @HostListener('drop', ['$event'])
  onDrop(ev: Event) {
    if (this.er.nativeerement === ev.target) {
      this.rd22.removeClass(this.er.nativeerement,this.dragEnterClass);
    }
  }*/

}
