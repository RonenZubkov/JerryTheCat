/**
 * Created by ronen on 03/09/2016.
 */
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'product-list.service';
import {Observable}     from 'rxjs/Observable';


@Component({
  selector: 'product-content',
  styles: [`
  `],
  template: `
    <h1>Products</h1>
    <div>
      Products
      <pre></pre>
    </div>
    <div>
      <h3>
        Food and stuff
      </h3>
    </div>
    <!--<pre>this.localState = {{ localState | json }}</pre>-->
  `
})

export class productList {

  constructor(){

  }

  ngOnInit(private products: Products){

    this.products.getProductData().subscribe(data => this.data = data);

  }

}
