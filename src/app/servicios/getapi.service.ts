import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class GetapiService {

  constructor( public _http: HttpClient) { 

  }

  getdata<T> (url : string)
  {
    url = 'https://api.npoint.io/d4d4d6ce4403e94fa17e/docentes'
    return this._http.get<T[]>(url);
  }
}
