import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { BookComponent } from './book/book.component';

import { LoggerService } from './logging.service';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    BookComponent,
    ContactComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
