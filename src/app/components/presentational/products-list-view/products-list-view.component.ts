import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../modules/shared/types/product';

@Component({
  selector: 'app-products-list-view',
  templateUrl: './products-list-view.component.html',
  styleUrls: ['./products-list-view.component.scss']
})
export class ProductsListViewComponent {
  @Input()
  productList!: Product[]; 
  @Output() update= new EventEmitter();
constructor(){

}
ngOnInit(){ 

}


}
