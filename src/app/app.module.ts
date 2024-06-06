import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './header/app.header.component';
import { LoginComponent } from './login/login.component';
import { TopBannerComponent } from './header/top-banner/top-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    ReistrationComponent,
    HeaderComponent,
    LoginComponent,
    TopBannerComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
