import { Inject, Injectable, Injector, inject } from "@angular/core";
import { ProductListSerivce } from '../productlist/productlist.service';


@Injectable()
export class BrandItemDetailsService{
  productListComponent: any;
  listOfProducts:any
  productListService:ProductListSerivce;


  constructor(private prodlistService:ProductListSerivce){
      this.productListService=prodlistService;
  }

    public getProductsByBrand(brandName: any) {
      console.log("getProductsByBrandCalled")
      this.listOfProducts = this.productListService.getProductList()
      console.log('returned product list size=',this.listOfProducts.size)
      return this.listOfProducts.filter(prod=>prod.name==brandName)
    }
}