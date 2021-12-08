import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganigramaUserComponent } from './organigramaUser.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: OrganigramaUserComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrganigramaUserComponent]
})
export class OrganigramaUserModule { }
