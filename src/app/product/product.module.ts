/**
 * Created by Ronen on 9/5/2016.
 */
import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
// import { AwesomePipe }        from './awesome.pipe';
import { Product }   from './product.component';
// import { ContactService }     from './contact.service';
// import { HighlightDirective } from './highlight.directive';
@NgModule({
  imports:      [ CommonModule, FormsModule ],
  // declarations: [ Product, HighlightDirective, AwesomePipe ],
  declarations: [ Product],
  exports:      [ Product ],
  providers:    [ ]
})
export class ProductModule {


}
