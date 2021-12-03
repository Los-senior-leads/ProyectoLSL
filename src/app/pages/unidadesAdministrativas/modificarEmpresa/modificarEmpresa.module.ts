import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModificarEmpresaComponent } from './modificarEmpresa.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: ModificarEmpresaComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModificarEmpresaComponent]
})
export class ModificarEmpresaModule { }
