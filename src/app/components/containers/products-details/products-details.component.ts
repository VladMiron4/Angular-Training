import { Component, OnInit, Output } from '@angular/core';
import { productsMockList } from '../../mocks/products.mock';
import { OrderProduct } from '../../../modules/shared/types/product.order';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute } from '@angular/router';
import { interval, of } from 'rxjs';
import { ShoppingCartService } from 'src/app/modules/shared/services/shopping.cart.service';
import { HttpClient } from '@angular/common/http';
import { ProductDto } from 'src/app/modules/shared/types/product.dto';
import { environment } from 'src/environments/environment';
import { AppNavigationService } from 'src/app/modules/shared/services/app-navigation.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ProductService } from 'src/app/services/products.service';

@UntilDestroy({
})
@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss'],
})
export class ProductsDetailsComponent implements OnInit {
  private shoppingCartService : ShoppingCartService;
   product:ProductDto={
    category:"",
    name:"",
    price:0,
    image:"",
    id:"",
    description:""
  };
   
  constructor(private productService:ProductService,private route: ActivatedRoute,shoppingCartService:ShoppingCartService,private http:HttpClient,private appNavigationService:AppNavigationService) {
    this.shoppingCartService=shoppingCartService;
  }
  onNavigateToProductList(){
    this.appNavigationService.navigateToProductsList();
  }
  onNavigateToProductEdit(id:string){
    this.appNavigationService.navigateToProductEdit(id);
  }
  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id).pipe(untilDestroyed((this))).subscribe((product : ProductDto) => (this.product = product));
  }

  catchAddToShoppingCartEvent(product:OrderProduct){
    this.shoppingCartService.addToShoppingCart(product);
  }
  catchDeleteProductEvent(id:String){
     this.http.delete(`${environment.apiUrl}/products/${id}`).subscribe(response=>this.appNavigationService.navigateToProductsList());
  }
}
