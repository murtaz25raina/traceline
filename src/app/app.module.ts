import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { DefaultLayoutComponent } from './layout/default-layout.component';
import { ContactComponent } from './view/contact/contact.component';
import { CardComponent } from './components/card/card.component';
import { ContactUsFooterComponent } from './components/contactus-footer/contactus-footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CardMobileComponent } from './components/card-mobile/card.mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DefaultLayoutComponent,
    ContactComponent,
    CardComponent,
    ContactUsFooterComponent,
    CardMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
