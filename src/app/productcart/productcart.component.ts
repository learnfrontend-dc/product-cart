import { Component, TemplateRef, Renderer2, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


export class Product {
  public productname:string;
  public code: string;
  public price: number;
  public rating: string;
  public qty: number
  constructor(){
   
  }
}

@Component({
  selector: 'product-cart',
  templateUrl: './productcart.component.html',
  styleUrls: ['./productcart.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductCartComponent implements OnInit, OnDestroy {
  windowListener: Function;

  public productlist : Product[]; 
  public totalprice=0;
  public ngOnInit(): void {
    this.productlist=[];
  }
  constructor(private renderer: Renderer2) {
    /*
    this.windowListener =
        renderer.listen('window', 'message', this.processMessage.bind(this));
        */
  }

  processMessage(event: Event) {
    
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
   }

  getProduct(productname) : Product {
    let productObj=undefined;
    for(let product of this.productlist) {
      if(product.productname === productname) {
        productObj=product; 
        break;
      }
  }
  return productObj;
  }
  ngOnDestroy() {
   // this.windowListener();
  }

  
}
