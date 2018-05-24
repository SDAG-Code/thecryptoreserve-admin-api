import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { BrokerManagementComponent } from './broker-management/broker-management.component';
import { HolderdataComponent } from './holderdata/holderdata.component';
import { BondManagementComponent } from './bond-management/bond-management.component';

const routes: Routes = [

  // adding pth to the components
  { 
    path: '',
    component: HomeComponent
   },
  {
    path: 'home',
    component: HomeComponent 
  },
  {
    path: 'transactionhistory',
    component: TransactionHistoryComponent 
  },
  {
    path: 'brokermanagment',
    component: BrokerManagementComponent 
  },
  {
    path: 'holderdata',
    component: HolderdataComponent 
  },
  {
    path: 'bondmanagement',
    component: BondManagementComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
