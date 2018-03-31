import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'denish';

  
  isPalindrom : boolean = false;

  getReverseString(str){
    console.log(2);
    if(str[0] === str[1])
      this.isPalindrom = true;
  }
}
