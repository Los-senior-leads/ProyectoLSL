import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaEdificiosComponent } from './tablaEdificios.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: TablaEdificiosComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TablaEdificiosComponent]
})
export class TablaEdificiosModule { }
