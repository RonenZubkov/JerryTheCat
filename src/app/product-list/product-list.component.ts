/**
 * Created by ronen on 03/09/2016.
 */
import { ProductsService } from '../services/products.service';
import {Observable}     from 'rxjs/Observable';
import { productModel } from '../product/product.model';
import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router, ActivatedRoute} from '@angular/router';
import { Product } from '../product/product.component';

@Component({
  selector: 'product-content',
  providers:[ProductsService],
  styles: [``],
  template: `
    <h1>Products</h1>
      <ul class = "productsList">
         <li *ngFor="let _product of _products" class="productList">
         {{_product.productName}}
         {{_product.id}}
         <a [routerLink]="['/product',_product.productId]"></a>
         </li>
          
          
      <pre></pre></ul>
      
      
      
    <div>
      <h3>
        Food and stuff
      </h3>
    </div>
    <!--<pre>this.localState = {{ localState | json }}</pre>-->
  `
})

export class productList implements OnInit{
  private _products: productModel[];
  id: string;


  constructor(private _productsService:ProductsService, private route: ActivatedRoute,public location: Location){
    route.params.subscribe(params => { this.id = params['id']; });
  }


  ngOnInit(){
    this.loadProducts()

  }

  loadProducts(){
    this._productsService.getProductsData()
      .subscribe(data => {
      console.log('observer objects: ',data);
      this._products = data;
    });
  }

  // productRedirect(){
    // (click)="productRedirect(_product.productId)"
  // }

}
