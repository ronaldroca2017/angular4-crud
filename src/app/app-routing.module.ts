import { CreateVendorComponent } from './create-vendor/create-vendor.component';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';
import { VendorsComponent } from './vendors/vendors.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: '', redirectTo: 'vendor', pathMatch: 'full' },
   { path: 'vendor',  component: VendorsComponent },
   { path: 'add', component: CreateVendorComponent },
   { path: 'detail/:id', component: VendorDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
