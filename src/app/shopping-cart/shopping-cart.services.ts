/**
 * Created by Ronen on 9/4/2016.
 */
import { Http } from '@angular/http';
import {Injectable} from 'angular2/core';
import { productsModel } from '../product/product.model';
// import {DefaultCheckout, IDiscount} from "./checkout.service";
// import {discounts} from "../Mock/discounts.mock.json";


@Injectable()
export class CartService {

  private cart:productsModel[];
  // private discount:IDiscount;

  constructor(private _http: Http){}

  addItem(product: productsModel){
    this.cart.push(item);
  }

  deleteItem(product: productsModel){
    this.cart = this.cart.filter(cartItem=>cartItem.id!==item.id);
  }

  clearCart(){
    this.cart = [];
  }

  // applyDiscount(code:string){
  //   this.discount = discounts.filter(discount=>discount.code==code)[0];
  // }

  getCart():Item[]{
    return this.cart;
  }

  getTotalPrice(){
    let totalPrice = this.cart.reduce((sum, cartItem)=>{
      return sum+=cartItem.price, sum;
    },0);
    if(this.discount){
      totalPrice -= totalPrice = this.discount.amount;
    }
    return totalPrice;
  }
}
