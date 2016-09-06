/**
 * Created by Ronen on 9/5/2016.
 */

import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
// import { AwesomePipe }        from './awesome.pipe';
import { productList }   from './product-list.component';
// import { ContactService }     from './contact.service';
// import { HighlightDirective } from './highlight.directive';
@NgModule({
  imports:      [ CommonModule, FormsModule ],
  // declarations: [ Product, HighlightDirective, AwesomePipe ],
  declarations: [ productList ],
  exports:      [ productList ],
  providers:    [ ]
})
export class ProductListModule {


}
