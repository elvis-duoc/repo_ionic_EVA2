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
    url = 'https://api.npoint.io/f1b894a5c30c2b035c39/asignatura'
    return this._http.get<T[]>(url);
  }

  getdata1<T> (url : string)
  {
    url = 'https://api.npoint.io/280f8e8c84684bfd4368/estudiantes'
    return this._http.get<T[]>(url);
  }
}
