import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoUsuarioComponent } from './infoUsuario.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: InfoUsuarioComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InfoUsuarioComponent]
})
export class InfoUsuarioModule { }
