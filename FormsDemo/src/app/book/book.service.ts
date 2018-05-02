import {Book} from './book';
import {Injectable} from '@angular/core';
@Injectable()
export class BookService {

    constructor(){

    }
    
    save(book : Book):void {
        console.log("Book Saved Successfully..."+book.bookId);
    }

}