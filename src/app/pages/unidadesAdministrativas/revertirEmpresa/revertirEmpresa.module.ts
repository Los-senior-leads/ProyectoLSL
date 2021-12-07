import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevertirEmpresaComponent } from './revertirEmpresa.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: RevertirEmpresaComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RevertirEmpresaComponent]
})
export class RevertirEmpresaModule { }
