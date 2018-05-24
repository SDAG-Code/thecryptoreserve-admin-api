import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-broker-management',
  templateUrl: './broker-management.component.html',
  styleUrls: ['./broker-management.component.css']
})
export class BrokerManagementComponent implements OnInit {

  public showBtns = true;
  public showExistingBrokers = false;
  public showCreateBroker = false;
  public allBonds = false;
  public allCommisions = false;

  
  constructor() { }

  ngOnInit() {
  }

}
