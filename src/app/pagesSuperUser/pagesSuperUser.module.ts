import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesSuperUserComponent } from './pagesSuperUser.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: PagesSuperUserComponent,
    children: [
      {path: '', redirectTo: 'tablaUsuarios', pathMatch: 'full'},
      {path: 'tablaUsuarios', loadChildren: () => import('./tablaUsuarios/tablaUsuarios.module').then(m => m.TablaUsuariosModule)},
      {path: 'crearUsuario', loadChildren: () => import('./crearUsuario/crearUsuario.module').then(m => m.CrearUsuarioModule)},
      {path: 'eliminarUsuario/:id', loadChildren: () => import('./eliminarUsuario/eliminarUsuario.module').then(m => m.EliminarUsuarioModule)},
      {path: 'modificarUsuario/:id', loadChildren: () => import('./modificarUsuario/modificarUsuario.module').then(m => m.ModificarUsuarioModule)},
      {path: 'infoUsuario/:id', loadChildren: () => import('./infoUsuario/infoUsuario.module').then(m => m.InfoUsuarioModule)}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PagesSuperUserComponent]
})
export class PagesSuperUserModule { }
