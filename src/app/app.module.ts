import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomerModule } from './modules/customer/customer.module'
import { LayoutModule } from './modules/layout/layout.module';
import { ConsumeApiModule } from './modules/consume-api/consume-api.module';
import { ProductModule } from './modules/product/product.module';
import { InvoiceModule } from './modules/invoice/invoice.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerModule,
    LayoutModule, 
    ConsumeApiModule, 
    ProductModule,
    InvoiceModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
