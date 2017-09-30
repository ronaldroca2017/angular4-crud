import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';
import { VendorsComponent } from './vendors/vendors.component';
import { DataService } from './data.service';
import { CreateVendorComponent } from './create-vendor/create-vendor.component';

import {enableProdMode} from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    VendorDetailsComponent,
    VendorsComponent,
    CreateVendorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
