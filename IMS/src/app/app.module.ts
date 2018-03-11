import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { MessageComponent } from './message.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { FriendsComponent } from './friends/friends.component';

@NgModule({
  declarations: [
    AppComponent,
    InquiryComponent,
    MessageComponent,
    BookDetailComponent,
    FriendsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
