import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      {path: '', redirectTo: 'unidadesAdministrativas', pathMatch: 'full'},
      {path: 'unidadesAdministrativas', loadChildren: () => import('./unidadesAdministrativas/unidadesAdministrativas.module').then(m => m.UnidadesAdministrativasModule)},
      {path: 'edificios', loadChildren: () => import('./edificios/edificios.module').then(m => m.EdificiosModule)},
      {path: 'organigrama', loadChildren: () => import('./organigrama/organigrama.module').then(m => m.OrganigramaModule)},
      {path: 'escalaSalarial', loadChildren: () => import('./escalaSalarial/escalaSalarial.module').then(m => m.EscalaSalarialModule)}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PagesComponent
  ]
})
export class PagesModule { }
