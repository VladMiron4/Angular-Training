import { Injectable } from '@angular/core';
import { OrderProduct } from '../types/product.order';

@Injectable(
 {providedIn:'root'}
)
export class ShoppingCartService {
  private shoppingCart: OrderProduct[] = [];
  public getShoppingCart(){
    return this.shoppingCart;
  }

  public addToShoppingCart(product: OrderProduct): OrderProduct[] {
    const foundProduct = this.shoppingCart.find((p) => p.id === product.id);
    if (!foundProduct) {
      product.quantity=0;
      product.quantity++;
      this.shoppingCart.push(product);
    } else {
      this.shoppingCart.forEach((findProduct) => {
        if (findProduct.id === product.id) {
          findProduct.quantity++;
        }
      });
    }
    return this.shoppingCart;
  }

  public removeFromShoppingCart(
    shoppingCart: OrderProduct[],
    productId: String
  ): OrderProduct[] {
    return shoppingCart.filter((product) => product.id !== productId.trim());
  }

}
