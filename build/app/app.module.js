/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ProductCartComponent } from './productcart/productcart.component';
var ProductCartModule = /** @class */ (function () {
    function ProductCartModule(injector) {
        this.injector = injector;
        var /** @type {?} */ productcart = createCustomElement(ProductCartComponent, { injector: injector });
        customElements.define('product-cart', productcart);
    }
    /**
     * @return {?}
     */
    ProductCartModule.prototype.ngDoBootstrap = /**
     * @return {?}
     */
    function () { };
    ProductCartModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ProductCartComponent],
                    imports: [BrowserModule],
                    entryComponents: [ProductCartComponent]
                },] },
    ];
    /** @nocollapse */
    ProductCartModule.ctorParameters = function () { return [
        { type: Injector, },
    ]; };
    return ProductCartModule;
}());
export { ProductCartModule };
function ProductCartModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ProductCartModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ProductCartModule.ctorParameters;
    /** @type {?} */
    ProductCartModule.prototype.injector;
}
