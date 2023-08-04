import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductDto } from 'src/app/modules/shared/types/product.dto';

@Component({
  selector: 'app-products-list-view',
  templateUrl: './products-list-view.component.html',
  styleUrls: ['./products-list-view.component.scss'],
})
export class ProductsListViewComponent {
  @Input() productList!: ProductDto[];
  @Output() navigateToCart = new EventEmitter<void>();
  @Output() navigateToCreate = new EventEmitter<void>();
  @Output() navigateToDetails = new EventEmitter<string>();
}
