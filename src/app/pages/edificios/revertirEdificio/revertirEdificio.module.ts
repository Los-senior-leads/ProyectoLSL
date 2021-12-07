import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevertirEdificioComponent } from './revertirEdificio.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: RevertirEdificioComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RevertirEdificioComponent]
})
export class RevertirEdificioModule { }
