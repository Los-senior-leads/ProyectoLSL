import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EliminarUsuarioComponent } from './eliminarUsuario.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: EliminarUsuarioComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EliminarUsuarioComponent]
})
export class EliminarUsuarioModule { }
