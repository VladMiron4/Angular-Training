import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutes } from '../types/app.routing.types';

@Injectable({ providedIn: 'root' })
export class AppNavigationService {
  constructor(private router: Router) {}

  navigateToCart() {
    this.router.navigate([AppRoutes.CART_FEATURE]);
  }

  navigateToProductsList() {
    this.router.navigate(['']);
  }

  navigateToProductDetails(id: string) {
    this.router.navigate([AppRoutes.PRODUCTS_FEATURE, id]);
  }

  navigateToProductEdit(id: string) {
    this.router.navigate([
      AppRoutes.PRODUCTS_FEATURE,
      AppRoutes.EDIT_SUB_FEATURE,
      id,
    ]);
  }
  navigateToProductCreate(){
    console.log(AppRoutes.PRODUCTS_FEATURE,AppRoutes.CREATE_SUB_FEATURE);
    this.router.navigate([
        AppRoutes.PRODUCTS_FEATURE,
        AppRoutes.CREATE_SUB_FEATURE,
    ])
  }
}