import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdificiosComponent } from './edificios.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: EdificiosComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EdificiosComponent]
})
export class EdificiosModule { }
