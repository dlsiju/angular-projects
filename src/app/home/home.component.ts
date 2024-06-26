import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../settings';
import { observeOn } from 'rxjs';

export interface Response {
  status: string,
  code: number,
  message:string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  toDate: Date = new Date(); 
  num:number=12345678.607067
  percent:number=90.34039
  currency:number=5500

     
  constructor(public http: HttpClient) {
  }
   
ngOnInit(): void {
  console.log('ng on init in home component called=',AppConstants.baseURL)
  const headers = { 'content-type': 'application/json'}  
  this.http.get<any>(AppConstants.baseURL+"/v1/userDetails", {withCredentials:true})
  .subscribe(response=>{
    console.log("Response From Get - response code="+response.code);
    console.log("Response From Get - response status="+response.status);
    console.log("Response From Get - response message="+response.message);
  },(error)=>{
    console.log('Error occured')
  },()=>{
    console.log('completed')
  })


}
onLogout() {
    this.http.get<any>(AppConstants.baseURL+'/v1/logout',{withCredentials:true})
    .subscribe(response=>{
      console.log("Response From Get - response code="+response.code);
    console.log("Response From Get - response status="+response.status);
    console.log("Response From Get - response message="+response.message);

    },(error)=>{},()=>{})
    
}



}
