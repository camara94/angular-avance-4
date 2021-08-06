import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { CustomerMainComponent } from './customers/customer-main/customer-main.component';
import { CustomersModule } from './customers/customers.module';

const routes: Routes = [
  { path: '', component: CustomerMainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AdminModule, CustomersModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
