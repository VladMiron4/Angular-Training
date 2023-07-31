import { Component, Input } from '@angular/core';
import { Product } from 'src/app/modules/shared/types/product';

@Component({
  selector: 'app-shopping-cart-details-view',
  templateUrl: './shopping-cart-details-view.component.html',
  styleUrls: ['./shopping-cart-details-view.component.scss']
})
export class ShoppingCartDetailsViewComponent {
  @Input() productList! : Product[];
}
