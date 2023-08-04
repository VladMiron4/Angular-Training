import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShoppingCartService } from 'src/app/modules/shared/services/shopping.cart.service';
import { ProductDto } from 'src/app/modules/shared/types/product.dto';
import { OrderProduct } from 'src/app/modules/shared/types/product.order';

@Component({
  selector: 'app-products-details-view',
  templateUrl: './products-details-view.component.html',
  styleUrls: ['./products-details-view.component.scss'],
})
export class ProductsDetailsViewComponent {
  shoppingCartService: ShoppingCartService;
  constructor(shoppingCartService: ShoppingCartService) {
    this.shoppingCartService = shoppingCartService;
  }
  @Input() product!: OrderProduct;
  @Input() shoppingCartImageUrl: String =
    'https://www.bing.com/images/search?view=detailV2&ccid=hd6cAKPA&id=A044F2E65A996F214578F90EC88C8F48BD14A299&thid=OIP.hd6cAKPAERPHDbVUFWRbyAHaHa&mediaurl=https%3A%2F%2Fimages.designtrends.com%2Fwp-content%2Fuploads%2F2015%2F11%2F27111316%2FShopping-Cart-Icons35.png&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.85de9c00a3c01113c70db55415645bc8%3Frik%3DmaIUvUiPjMgO%252bQ%26pid%3DImgRaw%26r%3D0&exph=1200&expw=1200&q=shopping+cart+png+icon&simid=608011243316977000&form=IRPRST&ck=19702DDA66BB9A3312DB37D868B833D5&selectedindex=1&ajaxhist=0&ajaxserp=0&vt=0&sim=11';
  @Output() addToShoppingCart: EventEmitter<OrderProduct> = new EventEmitter();
  @Output() deleteProduct: EventEmitter<string> = new EventEmitter();
  @Output() navigateToProductList: EventEmitter<string> = new EventEmitter();
  @Output() navigateToProductEdit: EventEmitter<string> = new EventEmitter();
}
