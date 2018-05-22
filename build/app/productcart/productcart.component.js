/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Renderer2, ViewEncapsulation } from '@angular/core';
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
export { Product };
function Product_tsickle_Closure_declarations() {
    /** @type {?} */
    Product.prototype.productname;
    /** @type {?} */
    Product.prototype.code;
    /** @type {?} */
    Product.prototype.price;
    /** @type {?} */
    Product.prototype.rating;
    /** @type {?} */
    Product.prototype.qty;
}
var ProductCartComponent = /** @class */ (function () {
    function ProductCartComponent(renderer) {
        /*
            this.windowListener =
                renderer.listen('window', 'message', this.processMessage.bind(this));
                */
        this.renderer = renderer;
        this.totalprice = 0;
    }
    /**
     * @return {?}
     */
    ProductCartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.productlist = [];
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ProductCartComponent.prototype.processMessage = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /*
            const message = event as MessageEvent;
            let product=this.getProduct(message.data['productname']);
            if(product !== undefined) {
              product.qty=product.qty + 1;
              product.price=product.price+message.data['price'];
              this.totalprice=this.totalprice+message.data['price'];
             } else {
              product = new Product();
              product.qty=1;
              product.price=message.data['price'];
              product.productname=message.data['productname'];
              this.productlist.push(product);
              this.totalprice=this.totalprice+product.price;
            }
            
          */
    };
    /**
     * @param {?} productname
     * @return {?}
     */
    ProductCartComponent.prototype.getProduct = /**
     * @param {?} productname
     * @return {?}
     */
    function (productname) {
        var /** @type {?} */ productObj = undefined;
        for (var _i = 0, _a = this.productlist; _i < _a.length; _i++) {
            var product = _a[_i];
            if (product.productname === productname) {
                productObj = product;
                break;
            }
        }
        return productObj;
    };
    /**
     * @return {?}
     */
    ProductCartComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // this.windowListener();
    };
    ProductCartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'product-cart',
                    template: "\n\n      <div class=\"col-sm-4\" >\n        <div class=\"panel panel-primary\">\n            <div class=\"panel-heading\">Check Out</div>\n            <div class=\"panel-body fixed-panel\">\n              <div class='table-responsivenes'   style=\"border:none\">\n                <table class='table' border=\"0\" style=\"    position: relative;\">\n                  <thead>\n                    <tr>\n                      <th>Product</th>\n                      <th>Quantity</th>\n                      <th>Price</th>\n                        \n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let product of productlist\"> \n                      <td>{{product.productname}}</td>\n                      <td>{{product.qty}}</td>\n                      <td>{{product.price | currency: 'USD' :true: '1.2-2'}}</td>\n                    </tr>\n                  </tbody>\n              \n                  <tfoot class=\"total\">\n                      <tr>\n                        <th style=\"border-bottom:0\">Total</th>\n                        <th style=\"border-bottom:0\"></th>\n                        <th style=\"border-bottom:0\">{{totalprice | currency: 'USD' :true: '1.2-2'}}</th>\n                          \n                      </tr>\n                    </tfoot>\n              \n                </table>\n            \n              </div>\n          \n            </div>\n\n            \n          </div>\n    </div>\n  ",
                    styles: ["\n    .fixed-panel {\n        height: 330px;\n       }\n\n\n       .total{\n        right: 0;\n        position: absolute;\n        top: 275px;\n    }\n  "],
                    encapsulation: ViewEncapsulation.Emulated
                },] },
    ];
    /** @nocollapse */
    ProductCartComponent.ctorParameters = function () { return [
        { type: Renderer2, },
    ]; };
    return ProductCartComponent;
}());
export { ProductCartComponent };
function ProductCartComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ProductCartComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ProductCartComponent.ctorParameters;
    /** @type {?} */
    ProductCartComponent.prototype.windowListener;
    /** @type {?} */
    ProductCartComponent.prototype.productlist;
    /** @type {?} */
    ProductCartComponent.prototype.totalprice;
    /** @type {?} */
    ProductCartComponent.prototype.renderer;
}
