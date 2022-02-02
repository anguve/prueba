import {
  faGripLines,
  faShoppingCart,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebar: EventEmitter<any> = new EventEmitter<any>();

  public _opened: boolean = false;
  readonly faShoppingCart: IconDefinition = faShoppingCart;
  readonly faGripLines: IconDefinition = faGripLines;

  constructor() {}

  ngOnInit() {}

  _toggleSidebar() {
    this._opened = !this._opened;
    this.toggleSidebar.emit(this._opened);
  }
}
