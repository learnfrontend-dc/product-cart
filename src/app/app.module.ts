import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { ProductCartComponent } from './productcart/productcart.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

@NgModule({
  declarations: [ProductCartComponent],
  imports: [BrowserModule, Angular2FontawesomeModule],
  entryComponents: [ProductCartComponent]
})
export class ProductCartModule {
  constructor(private injector: Injector) {
    const productcart = createCustomElement(ProductCartComponent, { injector });
    customElements.define('product-cart', productcart);
  }

  ngDoBootstrap() {}
}
