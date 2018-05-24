import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

// Import the DataService
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showSpinner: boolean = true;
  showMain: boolean = true;
  showPrintable: boolean = false;

  // Define a users property to hold our user data
  brokers: Array<any>;

  // Create an instance of the DataService through dependency injection
  constructor(private _dataService: DataService) {
  }


  ngOnInit() {
    // Access the Data Service's getUsers() method we defined
    this._dataService.getUsers()
      .subscribe(res => { this.brokers = res; this.showSpinner = false; });
    console.log(this.brokers);
  }

  finishFunction() {
    
  }
  

}
