import { Component, OnInit } from '@angular/core';
import { GetapiService } from '../servicios/getapi.service';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.page.html',
  styleUrls: ['./asignatura.page.scss'],
})
export class AsignaturaPage {
  
  getdata:any[]=[];
  constructor( public _services: GetapiService) {

    this._services.getdata<any[]>("").subscribe(data => {
      this.getdata = data
      console.log(this.getdata);
    }
      
      )

  }

}