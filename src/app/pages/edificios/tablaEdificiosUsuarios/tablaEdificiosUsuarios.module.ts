import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaEdificiosUsuariosComponent } from './tablaEdificiosUsuarios.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: TablaEdificiosUsuariosComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TablaEdificiosUsuariosComponent]
})
export class TablaEdificiosUsuariosModule { }
