import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { BrandItemDetailsService } from './branditemservice.service';
import { Product } from '../models/Product';


@Component({
  selector: 'app-branditemdetails',
  templateUrl: './branditemdetails.component.html',
  styleUrls: ['./branditemdetails.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule]
})
export class BranditemdetailsComponent implements OnInit {


onBackClick() {this.router.navigate([''])
}

  id:string='';
  brandName:string=''
  prod:Product

  constructor(private activatedRoute:ActivatedRoute,
    private router:Router,
    private brandService:BrandItemDetailsService){

  }
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get('brand')
    this.activatedRoute.paramMap.subscribe(pmap=>{
       this.brandName=pmap.get('brand')
     })
     console.log('id value=',this.id)
     console.log('id by observable=',this.brandName)
     this.prod=this.brandService.getProductsByBrand(this.brandName)
     console.log('name=',this.prod.name)
     console.log('price=',this.prod.price)

  }

}
