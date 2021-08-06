import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerMainComponent } from './customer-main/customer-main.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CustomerMainComponent, CustomerListComponent, CustomerDetailComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class CustomersModule { }
