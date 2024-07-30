import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AuthGuardService } from './../../services/auth-guard.service';

import { MainPageComponent } from './main-page/main-page.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { AboutComponent } from './about/about.component';
import { LayoutComponent } from './layout/layout.component';
import { PreferenceComponent } from './preference/preference.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { NewclientgenerationComponent } from 'src/app/newclientgeneration/newclientgeneration.component';
import { ReportsComponent } from './reports/reports.component';
import { AddEmployeeComponent } from './addemployee/addemployee.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    // canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'requirements', pathMatch: 'full' },
      { path: 'main', component: MainPageComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'requirements', component: RequirementsComponent },
      { path: 'preference', component: PreferenceComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'client', component: NewclientgenerationComponent },
      { path: 'submission', component: SubmissionsComponent },
      { path: 'addemployee', component: AddEmployeeComponent },
      { path: 'about', component: AboutComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
