import { Component } from '@angular/core';
import {  productsMockList } from '../../mocks/products.mock';
import { Product } from '../../../modules/shared/types/product';

@Component({
  selector: 'app-products-lists',
  templateUrl: './products-lists.component.html',
  styleUrls: ['./products-lists.component.scss'],
})
export class ProductsListsComponent  {
  productList: Product[]=productsMockList;
  constructor(){
  }
}
