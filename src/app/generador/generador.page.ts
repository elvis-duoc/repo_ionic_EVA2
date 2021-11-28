import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileModel } from './generador.model';
import { FirebaseAuthService } from '../firebase-auth.service';
import { GetapiService } from '../servicios/getapi.service';
//import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-generador',
  templateUrl: './generador.page.html',
  styleUrls: ['./generador.page.scss'],
})
export class GeneradorPage{

  getdata:any[]=[];
  mostrarImagen = false;

  qrData = 'ID/TOKEN/Bx2wMak1pZXzL5CW/';

  constructor( 
    public _services: GetapiService, 
    private router: Router,
    private route: ActivatedRoute,
    private authService: FirebaseAuthService,
    private barcodeScanner: BarcodeScanner,
		private base64ToGallery: Base64ToGallery,
		private toastCtrl: ToastController
    ) {}
  
  signOut() {
    this.authService.signOut().subscribe(() => {
      // Sign-out successful.
      this.router.navigate(['dual']);
    }, (error) => {
      console.log('signout error', error);
    });
  }

  displayImage() {
    this.mostrarImagen = !this.mostrarImagen;
  }
  

}
