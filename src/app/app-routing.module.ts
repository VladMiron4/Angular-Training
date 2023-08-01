import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartDetailsComponent } from './modules/shopping-cart/components/containers/shopping-cart-details/shopping-cart-details.component';
import { ProductsDetailsComponent } from './components/containers/products-details/products-details.component';
import { ProductsListsComponent } from './components/containers/products-lists/products-lists.component';

const routes: Routes = [
  {
    path: 'app-shopping-cart-details',
    component: ShoppingCartDetailsComponent,
  },
  {
    path: 'app-products-details/:id',
    component: ProductsDetailsComponent,
  },
  {
    path: 'app-products-lists',
    component: ProductsListsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
