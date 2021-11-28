import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneradorPageRoutingModule } from './generador-routing.module';

import { GeneradorPage } from './generador.page';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxQRCodeModule,
    GeneradorPageRoutingModule
  ],
  declarations: [GeneradorPage]
})
export class GeneradorPageModule {}
