import { Component } from '@angular/core';

@Component({
  selector: 'top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.css']
})
export class TopBannerComponent {

  searchbutton="Search"
  ser=true
  baseSearchKey=''
  onClick(){
    if(this.ser==false){
      this.ser=true
      this.searchbutton='Search'
    }else{
      this.ser=false
      this.searchbutton='Close'
    }
     console.log('dfdggfg')
  }
  onBaseSearch(baseINputText:HTMLInputElement){
    console.log(baseINputText.value)
    this.baseSearchKey=baseINputText.value
  }

}
