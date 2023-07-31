import { Component, OnInit } from '@angular/core';
import { productsMockList } from '../../mocks/products.mock';
import { Product } from '../../../modules/shared/types/product';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss'],
})
export class ProductsDetailsComponent implements OnInit {
  product: Product = productsMockList[0];

  constructor(private route: ActivatedRoute) {}
  getProduct(id: String): Observable<Product> {
    const product = productsMockList.find((product) => product.id === id)!;
    return of(product);
  }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.getProduct(id).subscribe((product) => (this.product = product));
  }
}
