import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpDocentePageRoutingModule } from './sign-up-docente-routing.module';

import { SignUpDocentePage } from './sign-up-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpDocentePageRoutingModule
  ],
  declarations: [SignUpDocentePage]
})
export class SignUpDocentePageModule {}
