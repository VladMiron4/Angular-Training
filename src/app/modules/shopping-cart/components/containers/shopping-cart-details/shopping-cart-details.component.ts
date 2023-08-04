import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable, of } from 'rxjs';
import { ShoppingCartService } from 'src/app/modules/shared/services/shopping.cart.service';
import { OrderProductWithId } from 'src/app/modules/shared/types/order.product';
import { OrderProduct } from 'src/app/modules/shared/types/product.order';
import { OrderByCustomerDto } from 'src/app/modules/shared/types/product.order.with.customer';
import { environment } from 'src/environments/environment';

@UntilDestroy({})
@Component({
  selector: 'app-shopping-cart-details',
  templateUrl: './shopping-cart-details.component.html',
  styleUrls: ['./shopping-cart-details.component.scss'],
})
export class ShoppingCartDetailsComponent {
  private shoppingCartService: ShoppingCartService;
  productList: OrderProduct[];
  constructor(
    shoppingCartService: ShoppingCartService,
    private http: HttpClient
  ) {
    this.shoppingCartService = shoppingCartService;
    this.productList = this.shoppingCartService.getShoppingCart();
  }

  getProducts(): Observable<OrderProduct[]> {
    return of((this.productList = this.shoppingCartService.getShoppingCart()));
  }

  catchProductDelete(productId: string) {
    this.productList = this.shoppingCartService.removeFromShoppingCart(
      this.productList,
      productId
    );
  }

  catchCheckoutOrder(productList: OrderProduct[]) {
    let dummyCustomer = 'bacb89d7-9070-426f-a662-facb538c8da9';
    let orderList: OrderProductWithId[] = [];
    productList.forEach((product) => {
      orderList.push({
        productId: product.id,
        quantity: product.quantity,
      });
    });
    let order: OrderByCustomerDto = {
      products: orderList,
      customerId: dummyCustomer,
    };
    this.http
      .post(`${environment.apiUrl}/orders`, order)
      .pipe(untilDestroyed(this))
      .subscribe();
    alert('order created successfully');
  }
}
