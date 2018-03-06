import { Component } from '@angular/core';
import { Person } from './person';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';
  person = new Person(10,"keyur","navsari");
  isValid: boolean = true;     
  name: string = 'keyur';
  city: string = 'pune';
  today: Date = new Date();
  book = {
    name: 'Java',
    author: 'Herbert',
    price: 200
  }
  changeValue(valid: boolean) {
    this.isValid = valid;
  }
}
