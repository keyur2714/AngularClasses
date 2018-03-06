import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomePipe } from './welcome.pipe';
import { FormatStringPipe } from './formatstr.pipe';
import { RepeatPipe } from './repeatpipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePipe,
    FormatStringPipe,
    RepeatPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
