import { Component } from '@angular/core';
import { productsMockList } from '../../mocks/products.mock';
import { Product } from '../../../modules/shared/types/product';
@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss'],
})
export class ProductsDetailsComponent {
product:Product =productsMockList[0];
}
