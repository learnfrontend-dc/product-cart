import { Renderer2, OnDestroy, OnInit } from '@angular/core';
export declare class Product {
    productname: string;
    code: string;
    price: number;
    rating: string;
    qty: number;
    constructor();
}
export declare class ProductCartComponent implements OnInit, OnDestroy {
    private renderer;
    windowListener: Function;
    productlist: Product[];
    totalprice: number;
    ngOnInit(): void;
    constructor(renderer: Renderer2);
    processMessage(event: Event): void;
    getProduct(productname: any): Product;
    ngOnDestroy(): void;
}
