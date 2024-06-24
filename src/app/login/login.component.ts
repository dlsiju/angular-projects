import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormGroup, FormsModule,FormControl,ReactiveFormsModule, Validators, NgForm, } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
})
export class LoginComponent {
  baseURL="https://dev.kwiqgigs.com/v1/login"
   
  constructor(public http: HttpClient) {
  }
   

  password:string
  pass:string
  email:string
  loginForm: ReactiveFormsModule;
  onLoginSubmit(loginForm:NgForm){
    console.log("login called=",loginForm.value)
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(loginForm.value);
    this.http.post(this.baseURL, body,{'headers':headers , observe: 'response'})
      .subscribe(
       response=> {
            console.log("POST completed sucessfully. The response receivvved "+response);
        },
        error => {
            console.log("Post failed with the errors");
        },
        () => {
            console.log("Post Completed");
        });
  }
  
  formGroup:FormGroup
reactiveForm = new FormGroup({
  email: new FormControl('',[Validators.required]),
  pass: new FormControl()
})
 
}
