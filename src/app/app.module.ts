import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { ArchwizardModule } from 'angular-archwizard';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { ModalModule } from 'ngx-bootstrap/modal';
import { ProgressbarModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { BrokerManagementComponent } from './broker-management/broker-management.component';
import { HolderdataComponent } from './holderdata/holderdata.component';
import { BondManagementComponent } from './bond-management/bond-management.component';

// Import the Http Module and our Data Service
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TransactionHistoryComponent,
    BrokerManagementComponent,
    HolderdataComponent,
    BondManagementComponent,
    LoadingSpinnerComponent,
    FooterComponent,
    SideNavComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    DataTablesModule,
    ArchwizardModule,
    HttpModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
