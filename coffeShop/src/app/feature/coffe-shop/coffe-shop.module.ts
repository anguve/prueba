import { HttpClientModule } from '@angular/common/http';
import { CoffeComponent } from './coffe/coffe.component';

import { ModalCoffeShopComponent } from './modal-coffe-shop/modal-coffe-shop.component';
import { CoffeShopRoutingModule } from './coffe-shop-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeShopComponent } from './coffe-shop.component';
import { SidebarModule } from 'ng-sidebar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CoffeShopRoutingModule,
    SidebarModule,
    FontAwesomeModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
    CoffeShopComponent,
    ModalCoffeShopComponent,
    HeaderComponent,
    CoffeComponent,
  ],
})
export class CoffeShopModule {}
