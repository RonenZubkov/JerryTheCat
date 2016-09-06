/**
 * Created by Ronen on 9/4/2016.
 */

import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Router, ActivatedRoute} from '@angular/router';
import { ProductsService } from '../services/products.service';
import {Observable}     from 'rxjs/Observable';
import { productModel } from './product.model';
import { AppState } from '../app.service';
import {Title} from "../home/title/title.service";




@Component({
  selector: 'product',
  providers:[ProductsService],
  styles: [``],
  template: `<div>
                <p>Pic</p>
                <p>3 more smaller pics</p>
                <p>description</p>
                <p>price</p>
                <p>Quantity bar to order</p>
                <p>add to cart</p>
             </div>
              
  `
})



export class Product {

  // private product: productModel;

  constructor(){}

  ngOninit(){
    // this.route
    //   .data
    //   .subscribe((data: any) => {
        // your resolved data from route
        // this.localState = data.yourData;
      // });
  }

  // getProduct(){
    // this.router.navigate(['./SomewhereElse']);
  // }

}
