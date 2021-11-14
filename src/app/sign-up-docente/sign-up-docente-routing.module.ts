import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpDocentePage } from './sign-up-docente.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpDocentePageRoutingModule {}
