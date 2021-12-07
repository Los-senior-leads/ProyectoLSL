import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganigramaComponent } from './organigrama.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: OrganigramaComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrganigramaComponent]
})
export class OrganigramaModule { }
