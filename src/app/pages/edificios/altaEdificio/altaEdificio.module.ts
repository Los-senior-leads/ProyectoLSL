import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaEdificioComponent } from './altaEdificio.component';
import { AltaEmpresaComponent } from '../../unidadesAdministrativas/altaEmpresa/altaEmpresa.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: AltaEdificioComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [AltaEdificioComponent]
})
export class AltaEdificioModule { }
