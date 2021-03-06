import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { About } from './about';
import { NoContent } from './no-content';
import { Product } from './product';
// import { } from '';
// import { ModuleWithProviders }  from '@angular/core';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: Home },
  { path: 'home',  component: Home },
  { path: 'about', component: About },
  { path: 'detail', loadChildren: () => System.import('./+detail') },
  { path: '**',    component: NoContent },
  { path: 'Product', loadChildren: './product/product.module'}
];
