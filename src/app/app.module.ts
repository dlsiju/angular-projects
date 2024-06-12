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
@NgModule({
  declarations: [
    AppComponent,
    ReistrationComponent,
    HeaderComponent,
    LoginComponent,
    TopBannerComponent,
    ProductlistComponent,
    SearchComponent,
    BrandComponent,
    ProductComponent,
    FilterComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
