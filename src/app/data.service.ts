import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/toPromise';

import { Vendor } from './vendor';

@Injectable()
export class DataService {

  private vendorUrl = 'api/vendor';  // URL to web API
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  // Get all vendors
  getVendors(): Promise<Vendor[]> {
    return this.http.get(this.vendorUrl)
               .toPromise()
               .then(response => response.json() as Vendor[])
               .catch(this.handleError);
  }

  getVendor(id: number): Promise<Vendor> {
    const url = `${this.vendorUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Vendor)
      .catch(this.handleError);
  }

  create(vendor: Vendor): Promise<Vendor> {
    return this.http
      .post(this.vendorUrl, JSON.stringify(vendor), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Vendor)
      .catch(this.handleError);
  }

  update(vendor: Vendor): Promise<Vendor> {
    return this.http
      .put(this.vendorUrl, JSON.stringify(vendor), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Vendor)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.vendorUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error); 
    return Promise.reject(error.message || error);
  }
}
