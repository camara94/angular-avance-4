import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomersService } from '../services/customers.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers$: Observable<any[]>;
  id: string;
  constructor(
      private customersService: CustomersService,
      private route: ActivatedRoute,
      private router: Router
    ) { }

  ngOnInit(): void {
    this.customers$ = this.customersService.getAllCustomers();
    
        
  }

  getOneCustomer(id: string) {
    this.router.navigateByUrl('customers/' + id)
  }

}
