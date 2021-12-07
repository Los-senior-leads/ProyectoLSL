import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaEsaclaSalarialUsuariosComponent } from './tablaEsaclaSalarialUsuarios.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: TablaEsaclaSalarialUsuariosComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TablaEsaclaSalarialUsuariosComponent]
})
export class TablaEsaclaSalarialUsuariosModule { }
