import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {


  result:any;

  constructor(private _http: Http) { }

  getUsers() {
    return this._http.get("https://adminportal-dev.herokuapp.com/getallbondgens/")
      .map(result => this.result = result.json());
  }

}
