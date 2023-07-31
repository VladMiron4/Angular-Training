import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListsComponent } from './components/containers/products-lists/products-lists.component';
import { ProductsListViewComponent } from './components/presentational/products-list-view/products-list-view.component';
import { ProductsDetailsViewComponent } from './components/presentational/products-details-view/products-details-view.component';
import { ProductsDetailsComponent } from './components/containers/products-details/products-details.component';
import { ShoppingCartModule } from './modules/shopping-cart/shopping-cart.module';


@NgModule({
  declarations: [
    AppComponent,
    ProductsListViewComponent,
    ProductsListsComponent,
    ProductsDetailsViewComponent,
    ProductsDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShoppingCartModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
