import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileModel } from './generador.model';
import { FirebaseAuthService } from '../firebase-auth.service';
import { GetapiService } from '../servicios/getapi.service';

@Component({
  selector: 'app-generador',
  templateUrl: './generador.page.html',
  styleUrls: ['./generador.page.scss'],
})
export class GeneradorPage{
  mostrarImagen = false;
  getdata:any[]=[];
  constructor( 
    public _services: GetapiService, 
    private router: Router,
    private route: ActivatedRoute,
    private authService: FirebaseAuthService,
    ) {

    this._services.getdata<any[]>("").subscribe(data => {
      this.getdata = data
      console.log(this.getdata);
    }
      )
    
  }
  displayImage() {
    this.mostrarImagen = !this.mostrarImagen;
  }

  signOut() {
    this.authService.signOut().subscribe(() => {
      // Sign-out successful.
      this.router.navigate(['dual']);
    }, (error) => {
      console.log('signout error', error);
    });
  }
  

}
