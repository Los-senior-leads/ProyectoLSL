import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaEscalaSalarialComponent } from './tablaEscalaSalarial.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: TablaEscalaSalarialComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TablaEscalaSalarialComponent]
})
export class TablaEscalaSalarialModule { }
