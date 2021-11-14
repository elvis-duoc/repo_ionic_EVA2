import { Component, OnInit } from '@angular/core';
import { GetapiService } from '../servicios/getapi.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage{

  getdata:any[]=[];
  constructor( public _services: GetapiService) {

    this._services.getdata<any[]>("").subscribe(data => {
      this.getdata = data
      console.log(this.getdata);
    }
      
      )

  }

}
