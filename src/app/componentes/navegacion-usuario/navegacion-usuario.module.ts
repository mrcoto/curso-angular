import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavegacionUsuarioComponent } from './navegacion-usuario.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavegacionUsuarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavegacionUsuarioComponent
  ]
})
export class NavegacionUsuarioModule { }
