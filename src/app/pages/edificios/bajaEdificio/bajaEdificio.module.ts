import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BajaEdificioComponent } from './bajaEdificio.component';
import { RouterModule, Routes } from '@angular/router';
import { BajaEmpresaComponent } from '../../unidadesAdministrativas/bajaEmpresa/bajaEmpresa.component';

const routes: Routes = [
  {path: '', component: BajaEmpresaComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [BajaEdificioComponent]
})
export class BajaEdificioModule { }
