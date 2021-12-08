import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesUsersComponent } from './pagesUsers.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: PagesUsersComponent,
    children: [
      {path: '', redirectTo: 'unidadesAdministrativasUser', pathMatch: 'full'},
      {path: 'unidadesAdministrativasUser', loadChildren: () => import('./unidadesAdministrativasUser/unidadesAdministrativasUser.module').then(m => m.UnidadesAdministrativasUserModule)},
      {path: 'edificiosUser', loadChildren: () => import('./edificiosUser/edificiosUser.module').then(m => m.EdificiosUserModule)},
      {path: 'organigramaUser', loadChildren: () => import('./organigramaUser/organigramaUser.module').then(m => m.OrganigramaUserModule)},
      {path: 'escalaSalarialUser', loadChildren: () => import('./escalaSalarialUser/escalaSalarialUser.module').then(m => m.EscalaSalarialUserModule)}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PagesUsersComponent]
})
export class PagesUsersModule { }
