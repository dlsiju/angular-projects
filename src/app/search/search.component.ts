import { Component } from '@angular/core';

@Component({
  selector: 'product-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchKeyword:string = ''
  filterPriceValue='all'
  products=[
    {
      name:"Apple",
      price:35000,
      color:"Blue",
      ram:[6,8,16],
      image:"assets/images/360_F_536241340_GsrsNhcWC0hyTVaJLilNafyDw6fl0cC8.jpg"

    },
    {
      name:"LG",
      price:75000,
      ram:[6,16],
      color:"Blue",
      image:"assets/images/smsung.jpg"

    },
    {
      name:"Vivo",
      price:45069,
      ram:[8,16],
      color:"Red",
      image:"assets/images/download.jpg"

    },
    {
      name:"Poco",
      price:15000,
      ram:[8,16],
      color:"Green",
      image:"assets/images/images.jpg"

    }
  ]

  allProductCount=this.products.length
  mediumPriceProductCount=this.products.filter(p=>p.price<30000).length
  maximumPriceProductCount=this.products.filter(p=>p.price>30000).length

  filterRadioChanged(eventValue:string){
    console.log("filter radio changed called=",eventValue)
    this.filterPriceValue=eventValue
    console.log('selected price='+this.filterPriceValue)
  }
}
