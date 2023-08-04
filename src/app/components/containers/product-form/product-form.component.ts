import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Product } from 'src/app/modules/shared/types/product.dto';
import { ProductService } from 'src/app/services/products.service';
@UntilDestroy()
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
})
export class ProductFormComponent implements OnInit, OnChanges {
  @Input() behaviour!: string;
  @Input() prevProduct?: Product;

  productForm!: FormGroup;
  product!: Product;
  constructor(private productService: ProductService) {
    
  }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl(''),
      category: new FormControl(''),
      price: new FormControl(''),
      image: new FormControl(''),
      description: new FormControl(''),
    });
    this.product = {
      category: '',
      name: '',
      price: 0,
      image: '',
      id: '',
      description: '',
    };
    if (this.behaviour === 'edit') {
      this.product = this.prevProduct!;
    } else if (this.behaviour === 'create') {
      this.product = {
        category: '',
        name: '',
        price: 0,
        image: '',
        id: '',
        description: '',
      };
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['prevProduct']?.previousValue !==
        changes['prevProduct']?.currentValue &&
      this.behaviour === 'edit'
    ) {
      this.prevProduct = changes['prevProduct'].currentValue;
      this.productForm.patchValue({
        name: this.prevProduct?.name,
        category: this.prevProduct?.category,
        description: this.prevProduct?.description,
        image: this.prevProduct?.image,
        price: String(this.prevProduct?.price),
      });
    }
  }

  catchProduct(productForm: FormGroup): void {
    if (this.behaviour === 'create') {
      this.productService
        .create({
          price: Number(this.productForm.value.price),
          name: productForm.value.name,
          description: productForm.value.description,
          category: productForm.value.category,
          image: productForm.value.image,
        })
        .pipe(untilDestroyed(this))
        .subscribe(
          (createdProduct) =>
            (this.product = {
              id: this.product.id,
              ...createdProduct,
            })
        );
      alert('Product created successfully');
    } else if (this.behaviour === 'edit') {
      let editProductDto: Product = {
        id: this.product.id,
        price: Number(this.productForm.value.price),
        name: productForm.value.name,
        description: productForm.value.description,
        category: productForm.value.category,
        image: productForm.value.image,
      };
      this.productService
        .put(editProductDto)
        .pipe(untilDestroyed(this))
        .subscribe();
      alert('Product edited successfully');
    } else {
      throw Error('form behaviour not found');
    }
  }
}
