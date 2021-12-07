import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearEscalaSalarialComponent } from './crearEscalaSalarial.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: CrearEscalaSalarialComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [CrearEscalaSalarialComponent]
})
export class CrearEscalaSalarialModule { }
