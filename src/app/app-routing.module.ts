import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './modules/main/dashboard/dashboard.component';
import { RequirementsComponent } from './modules/main/requirements/requirements.component';
import { NewclientgenerationComponent } from './newclientgeneration/newclientgeneration.component';
import { SubmissionsComponent } from './modules/main/submissions/submissions.component';


const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {
    path: 'main',loadChildren : () => import('./modules/main/main.module').then(m => m.MainModule),
  },
  {
    path: 'login',loadChildren : () => import('./modules/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/main/dashboard/dashboard.component').then(m => m.DashboardComponent)
  }, 
   
    {
      path: 'requirements',
      loadChildren: () => import('./modules/main/requirements/requirements.component').then(m => m.RequirementsComponent)
    },
    {
      path: 'submission',
      loadChildren: () => import('./modules/main/submissions/submissions.component').then(m => m.SubmissionsComponent)
    },
    {
      path: 'newClientGeneration',
      loadChildren: () => import('./newclientgeneration/newclientgeneration.component').then(m => m.NewclientgenerationComponent)
    },
  
  {
    path: 'dashboard',
    component: DashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
