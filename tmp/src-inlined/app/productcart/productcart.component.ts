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
  template: `

      <div class="col-sm-4" >
        <div class="panel panel-primary">
            <div class="panel-heading">Check Out</div>
            <div class="panel-body fixed-panel">
              <div class='table-responsivenes'   style="border:none">
                <table class='table' border="0" style="    position: relative;">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Price</th>
                        
                    </tr>
                  </thead>
                  <tbody>
                    <tr *ngFor="let product of productlist"> 
                      <td>{{product.productname}}</td>
                      <td>{{product.qty}}</td>
                      <td>{{product.price | currency: 'USD' :true: '1.2-2'}}</td>
                    </tr>
                  </tbody>
              
                  <tfoot class="total">
                      <tr>
                        <th style="border-bottom:0">Total</th>
                        <th style="border-bottom:0"></th>
                        <th style="border-bottom:0">{{totalprice | currency: 'USD' :true: '1.2-2'}}</th>
                          
                      </tr>
                    </tfoot>
              
                </table>
            
              </div>
          
            </div>

            
          </div>
    </div>
  `,
  styles: [`
    .fixed-panel {
        height: 330px;
       }


       .total{
        right: 0;
        position: absolute;
        top: 275px;
    }
  `],
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
