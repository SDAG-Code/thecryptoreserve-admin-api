import { Component, OnInit } from '@angular/core';
// adding datatables to the project 

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {

  showDetail: boolean = false;

  constructor() { }
// Must be declared as "any", not as "DataTables.Settings"
dtOptions: any = {};

ngOnInit(): void {
  this.dtOptions = {
    // Declare the use of the extension in the dom parameter
    dom: 'Bfrtp',
    select: true,
    // Configure the buttons
    buttons: [
      'copy',
      'print',
      'excel'
    ]
  };
}

}
