import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ColorDirective } from './directives/color.directives';
import { TestDirective } from './test.directive';

@NgModule({
  declarations: [
    AppComponent,
    ColorDirective,
    TestDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
