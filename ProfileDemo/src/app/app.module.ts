import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { FriendsComponent } from './friends/friends.component';
import { ManageStudentsComponent } from './manage-students/manage-students.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RegistrationComponent } from './registration/registration.component';
import { MydatagridComponent } from './mydatagrid/mydatagrid.component';
import { RevstrComponent } from './revstr/revstr.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    SuccessMessageComponent,
    FriendsComponent,
    ManageStudentsComponent,
    CalculatorComponent,
    RegistrationComponent,
    MydatagridComponent,
    RevstrComponent
  ],
  imports: [
    BrowserModule,
    FormsModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
