import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductDto } from 'src/app/modules/shared/types/product.dto';
import { environment } from 'src/environments/environment';
import { AppNavigationService } from 'src/app/modules/shared/services/app-navigation.service';

@Component({
  selector: 'app-products-lists',
  templateUrl: './products-lists.component.html',
  styleUrls: ['./products-lists.component.scss'],
})
export class ProductsListsComponent implements OnInit{
  productList:ProductDto[]=[];
  constructor(private http:HttpClient, private appNavigationService: AppNavigationService){
  }
  onNavigateToCart(){
    this.appNavigationService.navigateToCart();
  }
  onNavigateToCreate(){
    this.appNavigationService.navigateToProductCreate();
  }
  onNavigateToDetails(id:string){
    this.appNavigationService.navigateToProductDetails(id);
  }
  ngOnInit(): void {
    this.http.get(`${environment.apiUrl}/products`).subscribe(response=>this.productList=response as ProductDto[]);
  }
  
}
