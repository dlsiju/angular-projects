import { Component } from '@angular/core';

@Component({
  selector: 'productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {

   results:any = [];
  product1={
    name : 'PHONE',
    brand:'Rredmi',
    price:54000,
    discountprice:2000
  }
  product2={
    name : 'PHONE',
    brand:'Apple',
    price:300000,
    discountprice:1000
  }
  product3={
    name : 'PHONE',
    brand:'SAMSUNG',
    price:34000,
    discountprice:2400
  }
  product4={
    name : 'PHONE',
    brand:'LG',
    price:63044,
    discountprice:3000
  }
  product5={
    name : 'PHONE',
    brand:'Apple',
    price:300000,
    discountprice:5000
  }

  initializeProduct(){
    this.results.push(this.product1)
    this.results.push(this.product2)
    this.results.push(this.product3)
    this.results.push(this.product4)
    this.results.push(this.product5)
  }

  getDiscount(){
    return this.product1.price - this.product1.discountprice
  }

}
