import { Component, OnInit } from '@angular/core';
import { GetapiService } from '../servicios/getapi.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage{

  getdata1:any[]=[];
  constructor( public _services: GetapiService) {

    this._services.getdata1<any[]>("").subscribe(data => {
      this.getdata1 = data
      console.log(this.getdata1);
    }
      
      )

  }

}
