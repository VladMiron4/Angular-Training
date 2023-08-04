import { Injectable } from '@angular/core';
import { CreateProductDto } from '../modules/shared/types/create.product.dto';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ProductDto } from '../modules/shared/types/product.dto';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  public create(productDto: CreateProductDto): Observable<CreateProductDto> {
    return this.http.post(
      `${environment.apiUrl}/products`,
      productDto
    ) as Observable<CreateProductDto>;
  }
  public put(productDto: ProductDto): Observable<CreateProductDto> {
    return this.http.put(
      `${environment.apiUrl}/products/${productDto.id}`,
      productDto
    ) as Observable<ProductDto>;
  }
  getProduct(id: String): Observable<ProductDto> {
    return this.http.get(
      `${environment.apiUrl}/products/${id}`
    ) as Observable<ProductDto>;
  }
}

