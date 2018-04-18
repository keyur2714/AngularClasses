import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { BookService } from './boook.service';
import { Book } from './books.model';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [BookService]
})
export class BooksComponent implements OnInit {

  statusCode : number;
  isUpdate : boolean = false;

  newBook:Book = new Book();

  bookList:Book[] = [];

  //loggingService:LoggingService = new LoggingService(); it's not required because of DI

  constructor(private loggingService:LoggingService,private bookService:BookService){}

  ngOnInit() {
    this.loggingService.infoLog("Book Componet Loaded...");
    this.getAllBooks();
    this.getAllBooksWithHttpClient();
  }

  getAllBooks(){
     this.bookService.getAllBooks().subscribe(
        (response)=>{
           console.log(response.json()); 
           this.bookList = response.json();
        },
        (error)=>{
           console.log(error); 
        }
     )
  }
  
  getAllBooksWithHttpClient(){
    this.bookService.getAllBooksWithHttpClient().subscribe(
        (books)=>{
           console.log(books); 
           this.bookList = books;
        },
        (error)=>{
           console.log(error); 
        }
     )
  }

  saveBook(){
    console.log(this.newBook.id);
    this.bookService.saveBook(this.newBook).subscribe(
      (response)=>{
        console.log(response);
        this.statusCode = response.status;
        this.getAllBooksWithHttpClient();
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  update(){
    console.log(1);
    this.bookService.updateBook(this.newBook).subscribe(
      (response)=>{
        console.log(response);
        this.statusCode = response.status;
        this.getAllBooksWithHttpClient();
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  saveBookWithHttpClient(){
    
    this.bookService.saveBookWithHttpClient(this.newBook).subscribe(
      (status)=>{
        console.log(":::::::"+status+" :::::::::::");
        this.statusCode = status;
        this.getAllBooksWithHttpClient();
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  edit(id){
    this.isUpdate = true;
    this.bookService.getBookByIdWithHttpClient(id).subscribe(
      (book)=>{
        this.newBook = book;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  delete(id){
    this.bookService.delete(id).subscribe(
      (response)=>{
        console.log(response);
        this.statusCode = 204;
        this.getAllBooksWithHttpClient();
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
