import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaUnidaddesAdmnistrativasUsuariosComponent } from './tablaUnidaddesAdmnistrativasUsuarios.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: TablaUnidaddesAdmnistrativasUsuariosComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TablaUnidaddesAdmnistrativasUsuariosComponent]
})
export class TablaUnidaddesAdmnistrativasUsuariosModule { }
