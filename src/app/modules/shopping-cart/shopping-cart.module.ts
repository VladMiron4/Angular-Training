import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartDetailsComponent } from './components/containers/shopping-cart-details/shopping-cart-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { ShoppingCartDetailsViewComponent } from './components/presentational/shopping-cart-details-view/shopping-cart-details-view.component';
import { IconButtonComponent } from '../shared/components/icon-button/icon-button.component';



@NgModule({
  declarations: [
    ShoppingCartDetailsComponent,
    ShoppingCartDetailsViewComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    IconButtonComponent,
  ],
  exports:[
    ShoppingCartDetailsComponent,ShoppingCartDetailsComponent,
  ],
})
export class ShoppingCartModule { }
