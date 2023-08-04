import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { ProductDto } from 'src/app/modules/shared/types/product.dto';
import { ProductService } from 'src/app/services/products.service';

@UntilDestroy({
    checkProperties:true,
})
@Component({
  selector: 'app-products-edit-page',
  template: `<h1>Edit Product</h1>
    <div *ngIf="product"> 
        <app-product-form [prevProduct]="product"  behaviour="edit" /> 
    </div>
    `,
  styleUrls: [],
})
export class ProductsEditPageComponent implements OnInit {
  product!: ProductDto
 
  
  constructor(private productService: ProductService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id).subscribe((product) => {
      this.product = product;
      });
  }
  
}
