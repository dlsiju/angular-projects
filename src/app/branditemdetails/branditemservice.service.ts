import { Injectable, Injector } from "@angular/core";
import { ProductListSerivce } from "../productlist/productList.service";

@Injectable()
export class BrandItemDetailsService{
  productListComponent: any;
  listOfProducts:any

  constructor(private productListService:ProductListSerivce){}

    public getProductsByBrand(brandName: any) {
      console.log("getProductsByBrandCalled")
      this.listOfProducts = this.productListService.getProductList()
      return this.listOfProducts.filter(prod=>prod.name==brandName)
    }
}