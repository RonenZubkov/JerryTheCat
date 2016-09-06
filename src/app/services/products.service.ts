/**
 * Created by Ronen on 9/5/2016.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';



@Injectable()
export class ProductsService {
  private searchUrl: string;

  constructor(private _http: Http) {

  }

  getProductsData() {

    console.log('ProductList#getProductData(): Get Data');

    return this._http.get('/assets/mock-data/mock-data.json')
      .map(res => res.json());

  }
  //Todo Get Fucking id already!

  getProductById(){
    return this._http.get('/assets/mock-data/mock-data.json');
  }


}
