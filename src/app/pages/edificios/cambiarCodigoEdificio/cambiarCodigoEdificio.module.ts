import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CambiarCodigoEdificioComponent } from './cambiarCodigoEdificio.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: CambiarCodigoEdificioComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CambiarCodigoEdificioComponent]
})
export class CambiarCodigoEdificioModule { }
