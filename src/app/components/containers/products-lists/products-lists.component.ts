import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/modules/shared/types/product.dto';
import { environment } from 'src/environments/environment';
import { AppNavigationService } from 'src/app/modules/shared/services/app-navigation.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-products-lists',
  templateUrl: './products-lists.component.html',
  styleUrls: ['./products-lists.component.scss'],
})
export class ProductsListsComponent implements OnInit {
  productList!: Product[];
  constructor(
    private http: HttpClient,
    private appNavigationService: AppNavigationService
  ) {}
  ngOnInit(): void {
    this.productList=[];
    this.http
      .get(`${environment.apiUrl}/products`)
      .pipe(untilDestroyed(this))
      .subscribe((response) => (this.productList = response as Product[]));
  }
  onNavigateToCart() {
    this.appNavigationService.navigateToCart();
  }
  onNavigateToCreate() {
    this.appNavigationService.navigateToProductCreate();
  }
  onNavigateToDetails(id: string) {
    this.appNavigationService.navigateToProductDetails(id);
  }
  
}
