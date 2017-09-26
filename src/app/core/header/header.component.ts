import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSlideMenu = new EventEmitter<void>();
  @Output() toggleDarkTheme = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  openSideBar() {
    this.toggleSlideMenu.emit();
  }

  onChange($event){
    this.toggleDarkTheme.emit($event.checked);
  }

}
