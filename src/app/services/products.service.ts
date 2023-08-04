import { Injectable } from '@angular/core';
import { CreateProduct } from '../modules/shared/types/create.product.dto';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ProductDto } from '../modules/shared/types/product.dto';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  public create(productDto: CreateProduct): Observable<CreateProduct> {
    return this.http.post <CreateProduct>(
      `${environment.apiUrl}/products`,
      productDto
    ) ;
  }
  public put(productDto: ProductDto): Observable<CreateProduct> {
    return this.http.put <ProductDto>(
      `${environment.apiUrl}/products/${productDto.id}`,
      productDto
    );
  }
  getProduct(id: String): Observable<ProductDto> {
    return this.http.get <ProductDto> (
      `${environment.apiUrl}/products/${id}`
    ) 
  }
}
