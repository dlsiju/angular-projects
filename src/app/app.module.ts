import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './header/app.header.component';
import { LoginComponent } from './login/login.component';
import { TopBannerComponent } from './header/top-banner/top-banner.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { BrandComponent } from './brand/brand.component';
import { ProductComponent } from './search/product/product.component';
import { FilterComponent } from './search/filter/filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductviewComponent } from './search/productview/productview.component';
import { DefaultComponent } from './default/default.component';
import { RouterModule, Routes } from '@angular/router';
import { InvalidComponent } from './invalid/invalid.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClientModule  } from '@angular/common/http';
import { BranditemdetailsComponent } from './branditemdetails/branditemdetails.component';
import { ProductListSerivce } from './productlist/productList.service';
import { BrandItemDetailsService } from './branditemdetails/branditemservice.service';

const routes:Routes=[
  {path:'login',component:LoginComponent},
  {path:'abc',redirectTo:'login'},
  {path:'aboutus',component:AboutusComponent},
  {path:'mobiles/:brand',component:BranditemdetailsComponent},
  {path:'**',component:InvalidComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ReistrationComponent,
    HeaderComponent,
    TopBannerComponent,
    ProductlistComponent,
    SearchComponent,
    BrandComponent,
    ProductComponent,
    FilterComponent,
    ProductviewComponent,
    DefaultComponent,
    InvalidComponent,
    AboutusComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatSlideToggleModule,
    HttpClientModule
  ],
  providers: [BrandItemDetailsService,ProductListSerivce,ProductlistComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
