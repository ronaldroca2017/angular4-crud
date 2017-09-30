import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor';
import { DataService } from '../data.service';

@Component({
  selector: 'app-root',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css'],
})

export class VendorsComponent implements OnInit {
  vendors: Vendor[];
  msg: String = '';
  constructor(private dataService: DataService) {
   this.getVendors();
  }

  getVendors() {
    this.vendors = [];
    console.log(this.vendors);
     return this.dataService.getVendors().then(vendors => this.vendors = vendors);
  }

  ngOnInit(): void {
     this.getVendors();
  }
   cerrarMensaje() {
    this.msg = '';
   }
  deleteVendor(id): void {
      console.log(this.vendors);
    const confirmacion = confirm('Sure to remove the vendor');
    if (confirmacion) {
       this.dataService.delete(id).then(() => this.vendors);
       this.getVendors();
       this.msg = 'A vendor was deleted';
    }
  }



}
