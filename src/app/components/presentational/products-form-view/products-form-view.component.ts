import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from 'src/app/modules/shared/types/product.dto';

@Component({
  selector: 'app-products-form-view',
  templateUrl: './products-form-view.component.html',
  styleUrls: ['./products-form-view.component.scss'],
})
export class ProductsFormViewComponent {
  @Input() product!: Product;
  @Input() productForm!: FormGroup;
  @Output() submit: EventEmitter<FormGroup> = new EventEmitter();
  submitProduct(productForm: FormGroup) {
    this.submit.emit(productForm);
  }
  cancelEdit() {
    this.productForm.reset();
  }
}
