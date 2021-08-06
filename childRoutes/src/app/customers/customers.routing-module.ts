import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerMainComponent } from './customer-main/customer-main.component';

const customersRoutes: Routes = [
    { 
      path: 'customers', 
      component: CustomerMainComponent, 
      children: [
          { path: '', component: CustomerListComponent },
          { path: ':id', component: CustomerDetailComponent }
      ]
    } 
];

@NgModule({
  imports: [RouterModule.forChild(customersRoutes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }