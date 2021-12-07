import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModificarSueldoComponent } from './modificarSueldo.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: ModificarSueldoComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModificarSueldoComponent]
})
export class ModificarSueldoModule { }
