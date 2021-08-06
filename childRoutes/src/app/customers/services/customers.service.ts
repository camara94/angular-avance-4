import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CUSTOMERS } from '../shared/customers';
import {filter, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private customers: any[] = CUSTOMERS;
  constructor() { }

  getAllCustomers(): Observable<any[]> {
    return of(this.customers);
  }
  getCustomerById(id: string): Observable<any> {
    let customer: any;
    this.customers.forEach( c => {
      if( c.id == id ) {
        customer = c;
      }
    } )
    return of(customer);
  }
}
