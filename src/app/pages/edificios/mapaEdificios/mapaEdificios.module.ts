import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaEdificiosComponent } from './mapaEdificios.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: MapaEdificiosComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MapaEdificiosComponent]
})
export class MapaEdificiosModule { }
