import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Product } from 'src/app/modules/shared/types/product.dto';
import { ProductService } from 'src/app/services/products.service';

@UntilDestroy()
@Component({
  selector: 'app-products-edit-page',
  template: `<h1>Edit Product</h1>
    <div *ngIf="product">
      <app-product-form [prevProduct]="product" behaviour="edit" />
    </div> `,
  styleUrls: [],
})
export class ProductsEditPageComponent implements OnInit {
  product!: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.productService
      .getProduct(id)
      .pipe(untilDestroyed(this))
      .subscribe((product) => {
        this.product = product;
      });
  }
}
