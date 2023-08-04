import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductDto } from 'src/app/modules/shared/types/product.dto';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
})
export class ProductFormComponent implements OnInit{
  @Input() behaviour!: string;
  @Input() prevProduct?: ProductDto; // undefined on create mode
  @Output() buttonAction = new EventEmitter<{
    type: 'edit' | 'create';
    payload: ProductDto;
  }>(); // edit, create, close
  @Input() editProductForm?: FormGroup; //undefined on create mode

  product: ProductDto = {
    category: '',
    name: '',
    price: 0,
    image: '',
    id: '',
    description: '',
  };
  productForm: FormGroup = new FormGroup({});
  constructor(private productService: ProductService) {
  }
  ngOnInit(): void {
    this.productForm = this.editProductForm!;
    this.product=this.prevProduct!;
    console.log(this.product);
    console.log(this.prevProduct);
  }

  catchProduct(productForm: FormGroup): void {
    if (this.behaviour == 'create') {
      this.productForm.value.price = Number(this.productForm.value.price);
      this.productService
        .create(productForm.value)
        .subscribe((createdProduct) => console.log(createdProduct));
      console.log(this.productForm.value);
    } else if (this.behaviour == 'edit') {
      let editProductDto: ProductDto = {
        id: this.product.id,
        ...productForm.value,
      };
      this.productService.put(editProductDto);
      console.log(this.editProductForm);
      alert('Product edited successfully');
    } else {
      throw Error('form behaviour not found');
    }
  }
  
}
