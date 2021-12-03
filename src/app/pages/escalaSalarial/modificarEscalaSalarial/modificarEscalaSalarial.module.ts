import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModificarEscalaSalarialComponent } from './modificarEscalaSalarial.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: ModificarEscalaSalarialComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModificarEscalaSalarialComponent]
})
export class ModificarEscalaSalarialModule { }
