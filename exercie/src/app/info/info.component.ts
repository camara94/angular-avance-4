import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoComponent implements OnInit {
  @Input() customer: Observable<Customer>;
  currentCustomer: Customer;

  constructor( private cd: ChangeDetectorRef ) {}

  ngOnInit(): void {
    this.customer.subscribe( newCustomer => {
      this.currentCustomer = newCustomer;
      this.cd.markForCheck()
    } )
  }

}
