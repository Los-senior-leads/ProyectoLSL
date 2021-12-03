import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReporteSalarialComponent } from './reporteSalarial.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: ReporteSalarialComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReporteSalarialComponent]
})
export class ReporteSalarialModule { }
