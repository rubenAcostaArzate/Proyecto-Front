import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionComponent } from './modules/customer/components/region/region.component';
import { DatosUnamComponent } from './modules/consume-api/datos-unam/datos-unam.component';
import { CustomerComponent } from './modules/customer/components/customer/customer.component';
import { CustomerImageComponent } from './modules/customer/components/customer-image/customer-image.component';
import { ProductComponent } from './modules/product/components/product/product.component';

const routes: Routes = [
  { path: "region", component: RegionComponent },
  { path: "consume-api", component: DatosUnamComponent },
  { path: "customer", component: CustomerComponent },
  { path: "customer/:rfc", component: CustomerImageComponent },
  { path: "product", component: ProductComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
