import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearUsuarioComponent } from './crearUsuario.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: CrearUsuarioComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CrearUsuarioComponent]
})
export class CrearUsuarioModule { }
