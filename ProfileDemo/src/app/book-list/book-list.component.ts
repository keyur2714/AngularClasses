import { Component, OnInit } from '@angular/core';
import { Book } from '../book/book.model';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  bookList: Book[] = [];
  bookDisplayColumnList : string [] = ["bookId","bookName","price","author"];

  constructor() { }

  ngOnInit() {
  }

  addBook(newBook){
    this.bookList.push(newBook);
  }
}
