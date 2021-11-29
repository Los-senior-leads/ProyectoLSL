import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EscalaSalarialComponent } from './escalaSalarial.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: EscalaSalarialComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EscalaSalarialComponent]
})
export class EscalaSalarialModule { }
