import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Book } from './book.model';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  newBook : Book = new Book();
  tempBook : Book;
  constructor() { }

  ngOnInit() {
  }

  @Output("addBook")
  addBookEvent =new EventEmitter<Book>();

  addBook(){
    this.tempBook = new Book();
    this.tempBook.bookId = this.newBook.bookId;
    this.tempBook.bookName = this.newBook.bookName;
    this.tempBook.price = this.newBook.price;
    this.tempBook.author = this.newBook.author;

    this.addBookEvent.emit(this.tempBook);
  }

}
