import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoEmpresaComponent } from './infoEmpresa.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: InfoEmpresaComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InfoEmpresaComponent]
})
export class InfoEmpresaModule { }
