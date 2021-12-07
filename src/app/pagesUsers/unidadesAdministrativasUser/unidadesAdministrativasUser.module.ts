import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnidadesAdministrativasUserComponent } from './unidadesAdministrativasUser.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: UnidadesAdministrativasUserComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UnidadesAdministrativasUserComponent]
})
export class UnidadesAdministrativasUserModule { }
