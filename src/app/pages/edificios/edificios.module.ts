import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdificiosComponent } from './edificios.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: EdificiosComponent,
    children: [
      {path: '', redirectTo: 'tablaEdificios', pathMatch: 'full'},
      {path: 'altaEdificio/:id', loadChildren: () => import('./altaEdificio/altaEdificio.module').then(m => m.AltaEdificioModule)},
      {path: 'bajaEdificio/:id', loadChildren: () => import('./bajaEdificio/bajaEdificio.module').then(m => m.BajaEdificioModule)},
      {path: 'cambiarCodigoEdificio/:id', loadChildren: () => import('./cambiarCodigoEdificio/cambiarCodigoEdificio.module').then(m => m.CambiarCodigoEdificioModule)},
      {path: 'crearEdificio', loadChildren: () => import('./crearEdificio/crearEdificio.module').then(m => m.CrearEdificioModule)},
      {path: 'informacionEdificio/:id', loadChildren: () => import('./infoEdificio/infoEdificio.module').then(m => m.InfoEdificioModule)},
      {path: 'mapaEdificio/:id', loadChildren: () => import('./mapaEdificios/mapaEdificios.module').then(m => m.MapaEdificiosModule)},
      {path: 'modificarEdificio/:id', loadChildren: () => import('./modificarEdificio/modificarEdificio.module').then(m => m.ModificarEdificioModule)},
      {path: 'reporteEdificios', loadChildren: () => import('./reporteEdificios/reporteEdificios.module').then(m => m.ReporteEdificiosModule)},
      {path: 'revertirEdificio/:id', loadChildren: () => import('./revertirEdificio/revertirEdificio.module').then(m => m.RevertirEdificioModule)},
      {path: 'tablaEdificios', loadChildren: () => import('./tablaEdificios/tablaEdificios.module').then(m => m.TablaEdificiosModule)}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EdificiosComponent]
})
export class EdificiosModule { }
