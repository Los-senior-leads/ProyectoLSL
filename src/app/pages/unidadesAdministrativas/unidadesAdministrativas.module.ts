import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnidadesAdministrativasComponent } from './unidadesAdministrativas.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: UnidadesAdministrativasComponent,
    children: [
      {path: '', redirectTo: 'tablaUnidadAdministrativa', pathMatch: 'full'},
      {path: 'altaUnidadAdministrativa', loadChildren: () => import('./altaEmpresa/altaEmpresa.module').then(m => m.AltaEmpresaModule)},
      {path: 'bajaUnidadAdministrativa', loadChildren: () => import('./bajaEmpresa/bajaEmpresa.module').then(m => m.BajaEmpresaModule)},
      {path: 'crearUnidadAdministrativa', loadChildren: () => import('./crearEmpresa/crearEmpresa.module').then(m => m.CrearEmpresaModule)},
      {path: 'informacionUnidadAdministrativa', loadChildren: () => import('./infoEmpresa/infoEmpresa.module').then(m => m.InfoEmpresaModule)},
      {path: 'modificarUnidadAdministrativa', loadChildren: () => import('./modificarEmpresa/modificarEmpresa.module').then(m => m.ModificarEmpresaModule)},
      {path: 'reporteEmpresas', loadChildren: () => import('./reporteEmpresas/reporteEmpresas.module').then(m => m.ReporteEmpresasModule)},
      {path: 'revertirUnidadAdministrativa', loadChildren: () => import('./revertirEmpresa/revertirEmpresa.module').then(m => m.RevertirEmpresaModule)},
      {path: 'tablaUnidadAdministrativa', loadChildren: () => import('./tablaUnidadAdministrativa/tablaUnidadAdministrativa.module').then(m => m.TablaUnidadAdministrativaModule)},
      {path: 'tablaUnidadAdministrativaUsuarios', loadChildren: () => import('./tablaUnidaddesAdmnistrativasUsuarios/tablaUnidaddesAdmnistrativasUsuarios.module').then(m => m.TablaUnidaddesAdmnistrativasUsuariosModule)}
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UnidadesAdministrativasComponent]
})
export class UnidadesAdministrativasModule { }
