import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { MayormenorComponent } from './mayormenor/mayormenor.component';



@NgModule({
  declarations: [
    AhorcadoComponent,
    MayormenorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AhorcadoComponent
  ]
})
export class JuegosModule { }
