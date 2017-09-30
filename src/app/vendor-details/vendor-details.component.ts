import { Component, OnInit, Input } from '@angular/core';
import { Vendor } from '../vendor';
import { DataService } from '../data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.css'],
})

export class VendorDetailsComponent implements OnInit {

  vendor = new Vendor() ;
  submitted = false;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.dataService.getVendor(+params['id']))
      .subscribe(vendor => this.vendor = vendor);
  }

 private update(): void {
   this.vendor.active = (this.vendor.flagActive === true) ? 'Activo' : 'Desactivo';
   this.dataService.update(this.vendor);
   this.location.back();
 }


}
