import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoEdificioComponent } from './infoEdificio.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: InfoEdificioComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InfoEdificioComponent]
})
export class InfoEdificioModule { }
