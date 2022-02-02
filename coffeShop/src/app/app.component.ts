import { Subject } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  subject = new Subject<any>();

  public _opened: boolean = false;

  public _toggleSidebar() {
    this._opened = !this._opened;
  }
}
