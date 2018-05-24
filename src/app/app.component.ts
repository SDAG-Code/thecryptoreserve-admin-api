import { Component } from '@angular/core';

// Import the DataService
// import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public tog = true;
  
  title = 'app';

  // // Define a users property to hold our user data
  // brokers: Array<any>;

  // // Create an instance of the DataService through dependency injection
  // constructor(private _dataService: DataService) {

  //   // Access the Data Service's getUsers() method we defined
  //   this._dataService.getUsers()
  //       .subscribe(res => this.brokers = res);

  //       console.log(this.brokers);
  // }
  
}
