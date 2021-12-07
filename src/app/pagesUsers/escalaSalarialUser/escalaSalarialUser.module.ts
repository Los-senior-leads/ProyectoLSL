import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EscalaSalarialUserComponent } from './escalaSalarialUser.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: EscalaSalarialUserComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EscalaSalarialUserComponent]
})
export class EscalaSalarialUserModule { }
