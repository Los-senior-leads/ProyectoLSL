import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaEmpresaComponent } from './altaEmpresa.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: AltaEmpresaComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AltaEmpresaComponent]
})
export class AltaEmpresaModule { }
