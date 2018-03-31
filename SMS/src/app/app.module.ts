import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';

import { LoggingService } from './logging.service';
import { DatagridComponent } from './datagrid/datagrid.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    DatagridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
