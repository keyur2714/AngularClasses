import { Injectable } from '@angular/core';
import { Book } from './books.model';
import { Http,Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'RXJS'; 
@Injectable()
export class BookService{

    booksURL : string = "http://localhost:3000/bookDetails";
    constructor(private http:Http,private httpClient:HttpClient){}
    bookList : Book[] = [
        {
            id:1,
            name:"Java",
            author:"Herbert",
            price:700
        },
        {
		    "id": 2,
		    "name": "Hadoop Definative Guide",
		    "author": "Marshall",
		    "price": 800
	    },
	    {
		    "id": 3,
		    "name": "Angular 5",
		    "author": "Google",
		    "price": 600
	    }
    ];

    // getAllBooks():Book[]{
    //     return this.bookList;
    // }
    getAllBooks():Observable<Response>{
        return this.http.get(this.booksURL);
    }

    getAllBooksWithHttpClient():Observable<Book[]>{
        return this.httpClient.get<Book[]>(this.booksURL);
    }

    saveBook(book:Book):Observable<Response>{
        return this.http.post(this.booksURL,book);
    }

    updateBook(book:Book):Observable<Response>{
        return this.http.put(this.booksURL+"/"+book.id,book);
    }

    saveBookWithHttpClient(book:Book):Observable<number>{
        return this.httpClient.post<number>(this.booksURL,book);
    }

    getBookByIdWithHttpClient(id:number):Observable<Book>{
        return this.httpClient.get<Book>(this.booksURL+"/"+id);
    }

    delete(id):Observable<Response>{
        return this.http.delete(this.booksURL+"/"+id);
    }
}