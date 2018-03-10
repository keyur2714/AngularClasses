import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  @Input("bookName")
  name:string = "Java";
  @Input()
  author:string = "James";
  @Input()
  price:number= 500;

  constructor() { }

  ngOnInit() {
  }

}
