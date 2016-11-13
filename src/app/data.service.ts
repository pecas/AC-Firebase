import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getDatos(){
   return this.http.get('https://api-project-844525940125.firebaseio.com/.json').map(
      (res) => res.json()
    );
  }
}
