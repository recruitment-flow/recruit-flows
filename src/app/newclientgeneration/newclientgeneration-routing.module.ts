import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewclientgenerationComponent } from './newclientgeneration.component';

const routes: Routes = [
  {
    path: '',
    component: NewclientgenerationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewclientgenerationRoutingModule { }
