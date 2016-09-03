/**
 * Created by ronen on 03/09/2016.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()


export class Products {
  value = 'Angular 2';
  constructor(public http: Http) {

  }

  getProductData() {
    console.log('ProductList#getProductData(): Get Data');
    let Products = this.http.get('/assets/mock-data/mock-data.json')
      console.log(Products);
      .map(res => console.log(res.json()));
    // console.log(Products);
      return {
        value: 'data'
      };
    // {
    //   value: 'AngularClass'
    // };

  }

}
