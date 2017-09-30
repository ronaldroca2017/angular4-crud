import { Vendor } from '../vendor';
import { DataService } from '../data.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-vendor',
  templateUrl: './create-vendor.component.html',
  styleUrls: ['./create-vendor.component.css']
})
export class CreateVendorComponent implements OnInit {
  vendor = new Vendor;
  msg: String = '';
  submitted = false;
  constructor(private dataService: DataService,
              private location: Location) { }
  ngOnInit() {
  }

  newCustomer(): void {
    this.submitted = false;
    this.vendor = new Vendor();
  }

 private save(): void {
   if (this.vendor.codeVendor == null || this.vendor.codeVendor === '') {
   this.msg = 'Code Vendor Requerid!';
   }else  if (this.vendor.firstLastName == null || this.vendor.firstLastName === '') {
   this.msg = 'firstLastName requerid!';
   }else  if (this.vendor.typeVendor == null || this.vendor.typeVendor === 0) {
   this.msg = 'typeVendor requerid!';
   }else if (this.vendor.flagActive == null) {
   this.msg = 'active requerid!';
   }else {
   this.vendor.active = (this.vendor.flagActive === true) ? 'Activo' : 'Desactivo';
   this.dataService.create(this.vendor);
   this.location.back();
   }
 }

}
