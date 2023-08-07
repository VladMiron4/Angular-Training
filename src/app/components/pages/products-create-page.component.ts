import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-products-create-page',
  template: `
    <h1>Create Product</h1>
    <app-product-form behaviour="create" />
  `,
  styleUrls: [],
})
export class ProductsCreatePageComponent {}
