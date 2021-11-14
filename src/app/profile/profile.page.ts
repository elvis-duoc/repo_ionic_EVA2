import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileModel } from './profile.model';
import { FirebaseAuthService } from '../firebase-auth.service';
import { AlertController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: ProfileModel;
  getfrase = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: FirebaseAuthService,
    public alertCtrl: AlertController,
    private http: HttpClient
  ) {
    this.http.get<any>("https://randomuser.me/api/").subscribe((res) => {
      console.log(res);
      this.getfrase = res.results;
    });
   }

  ngOnInit() {
    this.route.data
    .subscribe((result) => {
      this.user = result['data'];
    }, (err) => {})
  }

  signOut() {
    this.authService.signOut().subscribe(() => {
      // Sign-out successful.
      this.router.navigate(['dual']);
    }, (error) => {
      console.log('signout error', error);
    });
  }

  async showAlert() {  
    const alert = await this.alertCtrl.create({  
      header: 'Error',  
      subHeader: '',  
      message: 'Cámara no compatible con la aplicación',  
      buttons: ['Cerrar']  
    });  
    await alert.present();  
    const result = await alert.onDidDismiss();  
    console.log(result);  
  } 

  
  
}
