import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from './customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  customer: Customer;

  customerForm: FormGroup;
  firstName: FormControl = new FormControl();
  lastName: FormControl = new FormControl();
  email: FormControl = new FormControl();

  constructor(private fb: FormBuilder) {
    this.customer = new Customer('Mawatta', 'CAMARA', 'mawatta@gmail.com')
  }
  ngOnInit(){
    this.createCustomerForm();
  }

  createCustomerForm(){
    // Création du formulaire
    this.customerForm = this.fb.group({
      firstName: [this.customer.firstName, [Validators.required]],
      lastName: [this.customer.lastName, [Validators.required]],
      email: [this.customer.email,  [Validators.required]],
      isNew: true
    })

  }

  changeProps() {
    this.customer.firstName = 'Makoura';
    this.customer.lastName = 'CAMARA';
    this.customer.email = 'makoura@gmail.com';
    this.createCustomerForm()
    console.log(this.customer)
  }
}
