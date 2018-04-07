import { Component,ViewChild } from '@angular/core';
import { ColorDirective } from './directives/color.directives';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  str : string = 'keyur';
  txtsize = '25px';
  txtSizes = ['15px','25px','35px'];

  @ViewChild(ColorDirective)
  private colorDirective : ColorDirective;

  changeColor(color : string){
    this.colorDirective.change(color);
  }

}
