import { Component, Input } from '@angular/core';
import { Product } from '../../../modules/shared/types/product';

@Component({
  selector: 'app-products-details-view',
  templateUrl: './products-details-view.component.html',
  styleUrls: ['./products-details-view.component.scss'],
})
export class ProductsDetailsViewComponent {
  @Input() product!: Product;
}
