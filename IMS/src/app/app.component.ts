import { Component,OnInit,ViewChild,ElementRef } from '@angular/core';
import { Book } from './book-detail/book.model';
import { CalculationComponent } from './calculation/calculation.component';
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
  age: number = 31;
  friendsList:string[] = [];

  @ViewChild("num1")
  num1:ElementRef;

  @ViewChild("num2")
  num2:ElementRef;

  @ViewChild(CalculationComponent)
  private calculationComponent: CalculationComponent;
  result:number;
  ngOnInit(){    
    // this.book.name = 'Angular';
    // this.book.author = 'Alex';
    // this.book.price = 400;
  }
  getNewFriend(friendName){
    console.log("2: "+friendName)
    this.friendsList.push(friendName);
  }

  addition(){
    console.log(this.num1);
    console.log(this.num1.nativeElement.value+" "+this.num2.nativeElement.value);
    console.log(this.calculationComponent);
    this.calculationComponent.add(parseInt(this.num1.nativeElement.value),parseInt(this.num2.nativeElement.value));
  }
  substraction(){
    console.log(this.num1.nativeElement.value+" "+this.num2.nativeElement.value);
    console.log(this.calculationComponent);
    this.calculationComponent.sub(parseInt(this.num1.nativeElement.value),parseInt(this.num2.nativeElement.value));
  }
}
