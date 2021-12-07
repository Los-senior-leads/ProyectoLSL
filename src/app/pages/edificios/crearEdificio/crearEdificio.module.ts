import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearEdificioComponent } from './crearEdificio.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: CrearEdificioComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CrearEdificioComponent]
})
export class CrearEdificioModule { }
