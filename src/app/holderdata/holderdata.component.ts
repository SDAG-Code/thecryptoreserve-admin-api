import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holderdata',
  templateUrl: './holderdata.component.html',
  styleUrls: ['./holderdata.component.css']
})
export class HolderdataComponent implements OnInit {

  public showBtns = true; 
  public searchResult = false;
  public searchConfirm = false;
  public searchreView = false;

  constructor() { }

  ngOnInit() {
  }

}
