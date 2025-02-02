import { ExcelService } from './services/excel.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainModule } from './modules/main/main.module';
import { LoginModule } from './modules/login/login.module';
import { MainService } from './services/main.service';
import { AlertService } from './services/alert.service';
import { HelperModule } from './pipes/helpers.module';
import { NewclientgenerationComponent } from './newclientgeneration/newclientgeneration.component';
import { CreateMasterDataComponent } from './newclientgeneration/create-master-data/create-master-data.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { AppMatTableComponent } from './app-mat-table/app-mat-table.component';
import { JwtInterceptor } from '../interceptors/jwtinterceptor.service';
import { AuthenticationService } from '../authentication/authentication.service';
import { LocalstorageService } from '../app/services/localstorage.service';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    AppMatTableComponent,
    NewclientgenerationComponent,
    CreateMasterDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HelperModule,
    MainModule,
    LoginModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatTableModule,
    FormsModule,
    MatListModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    MainService,
    AlertService,
    ExcelService,
    LocalstorageService,
    AuthenticationService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
