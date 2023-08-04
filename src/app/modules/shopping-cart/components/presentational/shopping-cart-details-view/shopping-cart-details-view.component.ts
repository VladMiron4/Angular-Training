import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OrderProduct } from 'src/app/modules/shared/types/product.order';

@Component({
  selector: 'app-shopping-cart-details-view',
  templateUrl: './shopping-cart-details-view.component.html',
  styleUrls: ['./shopping-cart-details-view.component.scss'],
})
export class ShoppingCartDetailsViewComponent {
  @Input() productList!: OrderProduct[];
  @Input() checkProductImageUrl:String ="https://th.bing.com/th/id/R.189293c189533da9b21a5ef17ea2e324?rik=MAfgpJ2wowWiFA&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fgoogle%2fnoto-emoji-animals-nature%2f1024%2f22261-panda-face-icon.png&ehk=vD0pnXcTaLISg70qiDxgrvKlO9b419ZbkjKd%2f53Sg%2bY%3d&risl=&pid=ImgRaw&r=0" ;
  @Input() shoppingCart!:OrderProduct[];
  @Input() deleteButtonImageUrl:String="https://th.bing.com/th/id/R.e59e314ff905eb963c93b2494efbda65?rik=VCamncIIjRCYSw&pid=ImgRaw&r=0";
  @Output() removeProductEvent=new EventEmitter<any>;
  @Output() checkoutOrderEvent=new EventEmitter<any>;
  @Output() navigateToProductDetailsEvent=new EventEmitter<string>;
  removeProduct(productId:String){
    this.removeProductEvent.emit(productId);
  }
  checkoutOrder(productList:OrderProduct[]){
    this.checkoutOrderEvent.emit(productList);
  }
}
