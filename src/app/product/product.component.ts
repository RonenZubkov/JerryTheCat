/**
 * Created by Ronen on 9/4/2016.
 */

import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { ProductsService } from '../services/products.service';
import {Observable}     from 'rxjs/Observable';
import { productModel } from './product.model';



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

  private product: productModel;

  constructor(){}

  ngOninit(){
  }

  getProduct() {
    // this.router.navigate(['./SomewhereElse']);
  }

}
