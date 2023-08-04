import { Injectable } from '@angular/core';
import { CreateProduct } from '../modules/shared/types/create.product';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../modules/shared/types/product.dto';

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
  public put(productDto: Product): Observable<CreateProduct> {
    return this.http.put <Product>(
      `${environment.apiUrl}/products/${productDto.id}`,
      productDto
    );
  }
  getProduct(id: String): Observable<Product> {
    return this.http.get <Product> (
      `${environment.apiUrl}/products/${id}`
    ) 
  }
}
