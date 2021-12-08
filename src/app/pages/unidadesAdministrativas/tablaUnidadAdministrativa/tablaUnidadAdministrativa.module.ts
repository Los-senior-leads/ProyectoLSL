import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaUnidadAdministrativaComponent } from './tablaUnidadAdministrativa.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', component: TablaUnidadAdministrativaComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TablaUnidadAdministrativaComponent]
})
export class TablaUnidadAdministrativaModule { }
