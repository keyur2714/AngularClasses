import { Component,OnInit } from '@angular/core';
import { Book } from './book-detail/book.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'IMS';
  books: Book[] = [
    {
      "name":"Java",
      "author":"James",
      "price":500
    },
    {
      "name":"Angular",
      "author":"Alex",
      "price":400
    },
    {
      "name":"Big Data",
      "author":"Martyn",
      "price":600
    }
  ];
  ngOnInit(){
    // this.book.name = 'Angular';
    // this.book.author = 'Alex';
    // this.book.price = 400;
  }
}
