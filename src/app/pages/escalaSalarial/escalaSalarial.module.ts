import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EscalaSalarialComponent } from './escalaSalarial.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: EscalaSalarialComponent,
    children: [
      {path: '', redirectTo: 'tablaEscalaSalarial', pathMatch: 'full'},
      {path: 'crearEscalaSalarial', loadChildren: () => import('./crearEscalaSalarial/crearEscalaSalarial.module').then(m => m.CrearEscalaSalarialModule)},
      {path: 'informacionEscalaSalarial/:id', loadChildren: () => import('./infoEsaclaSalarial/infoEsaclaSalarial.module').then(m => m.InfoEsaclaSalarialModule)},
      {path: 'modificarEscalaSalarial/:id', loadChildren: () => import('./modificarEscalaSalarial/modificarEscalaSalarial.module').then(m => m.ModificarEscalaSalarialModule)},
      {path: 'modificarSueldo/:id', loadChildren: () => import('./modificarSueldo/modificarSueldo.module').then(m => m.ModificarSueldoModule)},
      {path: 'reporteEscalaSalarial', loadChildren: () => import('./reporteSalarial/reporteSalarial.module').then(m => m.ReporteSalarialModule)},
      {path: 'tablaEscalaSalarial', loadChildren: () => import('./tablaEscalaSalarial/tablaEscalaSalarial.module').then(m => m.TablaEscalaSalarialModule)}
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EscalaSalarialComponent]
})
export class EscalaSalarialModule { }
