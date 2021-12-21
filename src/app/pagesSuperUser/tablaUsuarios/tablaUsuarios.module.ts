import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaUsuariosComponent } from './tablaUsuarios.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: TablaUsuariosComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TablaUsuariosComponent]
})
export class TablaUsuariosModule { }
