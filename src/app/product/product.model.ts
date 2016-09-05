/**
 * Created by Ronen on 9/4/2016.
 */


  export class productModel{

    constructor(
      productId : any,
      productName : string,
      productCode : string,
      releaseDate : Date,
      description : string,
      price : number,
      starRating : number,
      imageUrl : string
  ){}



  getImgUrl() {
    // return `src/app/shared/img/${this.productName}.png`;
  }

}
