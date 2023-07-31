import { Component } from '@angular/core';
import { productsMockList } from 'src/app/components/mocks/products.mock';
import { Product } from 'src/app/modules/shared/types/product';

@Component({
  selector: 'app-shopping-cart-details',
  templateUrl: './shopping-cart-details.component.html',
  styleUrls: ['./shopping-cart-details.component.scss'],
})
export class ShoppingCartDetailsComponent {
  productList: Product[] = productsMockList;
}
