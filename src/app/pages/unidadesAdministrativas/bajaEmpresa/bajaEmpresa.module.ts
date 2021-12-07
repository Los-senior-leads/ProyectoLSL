import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BajaEmpresaComponent } from './bajaEmpresa.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: BajaEmpresaComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BajaEmpresaComponent]
})
export class BajaEmpresaModule { }
