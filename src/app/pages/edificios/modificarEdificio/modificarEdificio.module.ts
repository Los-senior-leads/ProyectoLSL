import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModificarEdificioComponent } from './modificarEdificio.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: ModificarEdificioComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModificarEdificioComponent]
})
export class ModificarEdificioModule { }
