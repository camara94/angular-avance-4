import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  constructor() {
    this.customer = new Customer('Mawatta', 'CAMARA', 'mawatta@gmail.com')
  }
  ngOnInit(){
    this.createCustomerForm();
  }

  createCustomerForm(){
    //initialisation des champs du formulaire
    this.firstName.setValue( this.customer.firstName );
    this.lastName.setValue( this.customer.lastName );
    this.email.setValue( this.customer.email );

    // Création du formulaire
    this.customerForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email
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
