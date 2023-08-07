import { Injectable } from '@angular/core';
import { OrderProduct } from '../types/product.order';

@Injectable({ providedIn: 'root' })
export class ShoppingCartService {
  private shoppingCart: OrderProduct[] = [];
  public getShoppingCart() {
    return this.shoppingCart;
  }

  public addToShoppingCart(product: OrderProduct): OrderProduct[] {
    const foundProduct = this.shoppingCart.find((p) => p.id === product.id);
    if (!foundProduct) {
      product.quantity = 1;
      this.shoppingCart.push(product);
    } else {
      this.shoppingCart.find((p) => {
        if (p.id === product.id) {
          p.quantity++;
        }
      });
    }
    return this.shoppingCart;
  }

  public removeFromShoppingCart(
    shoppingCart: OrderProduct[],
    productId: string
  ): OrderProduct[] {
    return shoppingCart.filter((product) => product.id !== productId.trim());
  }
}
