import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class LeankitServiceService {

  constructor(
    private http: HttpClient
  ) { }

  

  public getAccount(auth : String) {
    let res;
    let Headers = {
      headers : new HttpHeaders({
        'Content-type' : 'application/json',
        'Authorization' : 'basic '+auth
      })
    }
    console.log(this.http.get("https://casewareukltd.leankit.com/io/account"));
  }

}
