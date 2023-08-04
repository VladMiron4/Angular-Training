import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListsComponent } from './components/containers/products-lists/products-lists.component';
import { ProductsListViewComponent } from './components/presentational/products-list-view/products-list-view.component';
import { ProductsDetailsViewComponent } from './components/presentational/products-details-view/products-details-view.component';
import { ProductsDetailsComponent } from './components/containers/products-details/products-details.component';
import { ShoppingCartModule } from './modules/shopping-cart/shopping-cart.module';
import { IconButtonComponent } from './modules/shared/components/presentational/icon-button/icon-button.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductFormComponent } from './components/containers/product-form/product-form.component';
import { ProductsFormViewComponent } from './components/presentational/products-form-view/products-form-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsCreatePageComponent } from './components/pages/products-create-page.component';
import { ProductsEditPageComponent } from './components/pages/products-edit-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListViewComponent,
    ProductsListsComponent,
    ProductsDetailsViewComponent,
    ProductsDetailsComponent,
    ProductsFormViewComponent,
    ProductsCreatePageComponent,
    ProductsEditPageComponent,
    ProductFormComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    ShoppingCartModule,
    IconButtonComponent,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
