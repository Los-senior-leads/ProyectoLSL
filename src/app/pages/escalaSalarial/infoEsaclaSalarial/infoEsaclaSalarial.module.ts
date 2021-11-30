import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoEsaclaSalarialComponent } from './infoEsaclaSalarial.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: InfoEsaclaSalarialComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [InfoEsaclaSalarialComponent]
})
export class InfoEsaclaSalarialModule { }
