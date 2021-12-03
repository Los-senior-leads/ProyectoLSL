import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearEmpresaComponent } from './crearEmpresa.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: CrearEmpresaComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CrearEmpresaComponent]
})
export class CrearEmpresaModule { }
