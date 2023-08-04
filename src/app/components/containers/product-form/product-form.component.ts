import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductDto } from 'src/app/modules/shared/types/product.dto';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
})
export class ProductFormComponent implements OnInit, OnChanges{
  @Input() behaviour!: string;
  @Input() prevProduct?: ProductDto; // undefined on create mode
  @Output() buttonAction = new EventEmitter<{
    type: 'edit' | 'create';
    payload: ProductDto;
  }>(); // edit, create, close
  
  product: ProductDto = {
    category: '',
    name: '',
    price: 0,
    image: '',
    id: '',
    description: '',
  };

  constructor(private productService: ProductService) {
  }

  productForm=  new FormGroup({
    name: new FormControl(""),
    category: new FormControl(""),
    price: new FormControl(""),
    image: new FormControl(""),
    description: new FormControl(""),
  });

  ngOnInit(): void {
    if (this.behaviour==="edit")
    {
      
    }
   
    this.product=this.prevProduct!;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['prevProduct']?.previousValue !== changes['prevProduct']?.currentValue && this.behaviour ==='edit') {
      this.prevProduct = changes['prevProduct'].currentValue;
      this.productForm.patchValue({
        name:this.prevProduct?.name,
        category:this.prevProduct?.category,
        description:this.prevProduct?.description,
        image:this.prevProduct?.image,
        price:String(this.prevProduct?.price),
      })
    }
  }

  catchProduct(productForm: FormGroup): void {
    if (this.behaviour == 'create') {
      this.productForm.value.price = this.productForm.value.price;
      this.productService
        .create(productForm.value)
        .subscribe((createdProduct) =>this.product={
          id:this.product.id,
          ...createdProduct
        });
    } else if (this.behaviour == 'edit') {
      let editProductDto: ProductDto = {
        id: this.product.id,
        ...productForm.value,
      };
      this.productService.put(editProductDto);
      alert('Product edited successfully');
    } else {
      throw Error('form behaviour not found');
    }
  }
  
}
