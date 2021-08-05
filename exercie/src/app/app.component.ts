import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Customer } from './customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  customer: Customer;
  customerSubject: BehaviorSubject<Customer>;
  constructor() {
    this.customer = new Customer( 'Mawatta', 'CAMARA', 'ldamaro98@gmail.com' );
    this.customerSubject = new BehaviorSubject<Customer>(this.customer);
  }

  changeProps() {
    this.customer.firstname = 'Kalil';
    this.customer.lastname = 'KAMARA';
    this.customerSubject.next(this.customer);
  }

  changeObject() {
    this.customer = new Customer('Makoura', 'CAMARA', 'makoura@gmail.com');
    this.customerSubject.next(this.customer)
  }
}
