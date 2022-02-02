import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faShoppingCart,
  faStore,
  faTimes,
  faWarehouse,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-coffe-shop',
  templateUrl: './coffe-shop.component.html',
  styleUrls: ['./coffe-shop.component.scss'],
})
export class CoffeShopComponent implements OnInit {
  @Input() item: any;
  readonly faShoppingCart: IconDefinition = faShoppingCart;
  readonly faWarehouse: IconDefinition = faWarehouse;
  readonly faTimes: IconDefinition = faTimes;

  public _opened: boolean = false;

  public _toggleSidebar() {
    this._opened = !this._opened;
  }
  constructor() {}

  ngOnInit() {}
}
