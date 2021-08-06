import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { CustomersModule } from './customers/customers.module';
import { CustomersRoutingModule } from './customers/customers.routing-module';

const routes: Routes = [
  { path: '',   redirectTo: '/customers', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), CustomersRoutingModule],
  exports: [RouterModule, AdminModule]
})
export class AppRoutingModule { }
