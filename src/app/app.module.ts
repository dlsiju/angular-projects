import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopBannerComponent } from './topbanner/topbanner.component';
import { ReistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBannerComponent,
    ReistrationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
