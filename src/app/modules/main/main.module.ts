import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';

import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { AboutComponent } from './about/about.component';
import { LayoutComponent } from './layout/layout.component';
import { PreferenceComponent } from './preference/preference.component';
import { HelperModule } from 'src/app/pipes/helpers.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { AddRequirementComponent } from './requirements/add-requirement/add-requirement.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportsComponent } from './reports/reports.component';
import { AddEmployeeComponent } from './addemployee/addemployee.component';

@NgModule({
  declarations: [
    MainPageComponent, SubmissionsComponent,
    AboutComponent, LayoutComponent,
    PreferenceComponent, DashboardComponent, RequirementsComponent, AddRequirementComponent, ReportsComponent, AddEmployeeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClarityModule,
    HelperModule,
    MainRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainModule { }
