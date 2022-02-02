import { CoffeShopComponent } from './coffe-shop.component';
import { ShopComponent } from './shop/shop.component';
import { CoffeComponent } from './coffe/coffe.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CoffeShopComponent,
    children: [
      {
        path: 'shop',
        component: ShopComponent,
      },
      {
        path: 'coffe',
        component: CoffeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoffeShopRoutingModule {}
