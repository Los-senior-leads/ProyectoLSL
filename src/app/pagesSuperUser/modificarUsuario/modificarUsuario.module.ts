import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModificarUsuarioComponent } from './modificarUsuario.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: ModificarUsuarioComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModificarUsuarioComponent]
})
export class ModificarUsuarioModule { }
