import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductDto } from 'src/app/modules/shared/types/product.dto';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-edit-page',
  template: `<h1>Edit Product</h1>
    <div *ngIf="product && productForm"> 
        <app-product-form [prevProduct]="product" [editProductForm]="productForm" behaviour="edit" /> 
    </div>
    `,
  styleUrls: [],
})
export class ProductsEditPageComponent implements OnInit {
  product: ProductDto = {
    category: '',
    name: '',
    price: 0,
    image: '',
    id: '',
    description: '',
  };
  productForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    category: new FormControl(''),
    price: new FormControl(''),
    image: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(private productService: ProductService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id).subscribe((product) => {
      this.product = product;
      this.productForm = new FormGroup({
        name: new FormControl(product.name),
        category: new FormControl(product.category),
        price: new FormControl(product.price),
        image: new FormControl(product.image),
        description: new FormControl(product.description),
      });
    });
  }
  // retrieve id from route snapshot
  // retrieve product by id
  // send smart form the

  // onButtonEvent(actionType: string): void {
  //         if(edit) => call service with product
  //}
}
