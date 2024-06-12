import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input()
  prod:{
    name:string,
    price:number,
    color:string,
    ram:number[],
    image:string
  };
}
