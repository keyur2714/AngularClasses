import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Book } from './book';
import { BookService } from './book.service';
import { LoggerService } from '../logging.service';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [BookService]
})
@Injectable()
export class BookComponent implements OnInit {

  book =new Book();
  
  isSubmitted:boolean = false;

  bookForm = new FormGroup({
    bookId : new FormControl(2,Validators.required),
    bookName: new FormControl('java',[Validators.required,Validators.maxLength(20)]),
    author: new FormControl('Herert',Validators.required),
    price: new FormControl(400,Validators.required)
  });

  constructor(private bookService : BookService,private looggerService:LoggerService) { }

  ngOnInit() {
    this.book.bookId = 3;
    this.book.bookName = "Angular";
  }

  saveBook(){
    this.looggerService.log("Inside Save Book Method:");
    console.log(this.bookForm);
    console.log(this.bookForm.value);
    console.log(this.bookForm.controls["bookName"].value);
    console.log(this.book.bookId);
    this.isSubmitted = true;
    this.bookService.save(this.book);
  }

}
