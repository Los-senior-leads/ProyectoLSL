import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnidadesAdministrativasComponent } from './unidadesAdministrativas.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: UnidadesAdministrativasComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UnidadesAdministrativasComponent]
})
export class UnidadesAdministrativasModule { }
