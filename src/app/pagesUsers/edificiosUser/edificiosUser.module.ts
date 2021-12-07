import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdificiosUserComponent } from './edificiosUser.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: EdificiosUserComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EdificiosUserComponent]
})
export class EdificiosUserModule { }
