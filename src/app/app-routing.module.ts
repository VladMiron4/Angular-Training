import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartDetailsComponent } from './modules/shopping-cart/components/containers/shopping-cart-details/shopping-cart-details.component';
import { ProductsDetailsComponent } from './components/containers/products-details/products-details.component';
import { ProductsListsComponent } from './components/containers/products-lists/products-lists.component';
import { ProductsCreatePageComponent } from './components/pages/products-create-page.component';
import { AppRoutes } from './modules/shared/types/app.routing.types';
import { ProductsEditPageComponent } from './components/pages/products-edit-page.component';

// products => ProductsListPage
// products/create => ProductsCreatePageComponent
// products/:id => ProductDetailsPage
// cart

// (click) => NavigationService
// navigateToProductsList => this.router.navigateByUrl('/products')
// navigateToProductsCreate => tihs.router.navigate(['products', 'create'])

const routes: Routes = [
  {
    path: `${AppRoutes.PRODUCTS_FEATURE}/${AppRoutes.CREATE_SUB_FEATURE}`,
    component: ProductsCreatePageComponent, // create page
  },
  {
    path: `${AppRoutes.PRODUCTS_FEATURE}`,
    component: ProductsListsComponent,
  },
  {
    path: `${AppRoutes.CART_FEATURE}`,
    component: ShoppingCartDetailsComponent,
  },
  {
    path: `${AppRoutes.PRODUCTS_FEATURE}/:id`,
    component: ProductsDetailsComponent,
  },
  {
    path: `${AppRoutes.PRODUCTS_FEATURE}/${AppRoutes.EDIT_SUB_FEATURE}/:id`,
    component: ProductsEditPageComponent,
  },
  {
    path: '',
    redirectTo: `${AppRoutes.PRODUCTS_FEATURE}`,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
