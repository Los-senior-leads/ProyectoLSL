import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReporteEmpresasComponent } from './reporteEmpresas.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: ReporteEmpresasComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ReporteEmpresasComponent]
})
export class ReporteEmpresasModule { }
