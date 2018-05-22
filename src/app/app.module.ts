import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { ProductCartComponent } from './productcart/productcart.component';

@NgModule({
  declarations: [ProductCartComponent],
  imports: [BrowserModule],
  entryComponents: [ProductCartComponent]
})
export class ProductCartModule {
  constructor(private injector: Injector) {
    const productcart = createCustomElement(ProductCartComponent, { injector });
    customElements.define('product-cart', productcart);
  }

  ngDoBootstrap() {}
}
