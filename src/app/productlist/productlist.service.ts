import { Injectable } from "@angular/core";
import { ProductlistComponent } from "./productlist.component";
@Injectable()
export class ProductListSerivce{

    constructor(private productListComponent:ProductlistComponent){}

    public getProductList(){
        console.log('getProductList method calleddddddddddddd')
        console.log('sizeeeeee=',this.productListComponent.results)
       return  this.productListComponent.results
    }
}