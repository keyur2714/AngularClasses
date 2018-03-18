import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { FriendsComponent } from './friends/friends.component';
import { ManageStudentsComponent } from './manage-students/manage-students.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    SuccessMessageComponent,
    FriendsComponent,
    ManageStudentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
