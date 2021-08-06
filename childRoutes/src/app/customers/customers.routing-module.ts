import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerMainComponent } from './customer-main/customer-main.component';

const customersRoutes: Routes = [
    { 
      path: 'customers', 
      component: CustomerMainComponent, 
      children: [
          { path: '', component: CustomerListComponent }
      ]
    } 
];

@NgModule({
  imports: [RouterModule.forChild(customersRoutes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }