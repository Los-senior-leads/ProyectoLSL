import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReporteEdificiosComponent } from './reporteEdificios.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: ReporteEdificiosComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReporteEdificiosComponent]
})
export class ReporteEdificiosModule { }
