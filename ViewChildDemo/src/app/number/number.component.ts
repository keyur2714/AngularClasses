import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

  constructor() { }

  @Input()
  number1 : string;
  
  required : boolean = true;

  result : number = 0;

  ngOnInit() {
  }

  add(number2){
    console.log(number2);
    console.log(this.number1);
    this.result = parseInt(this.number1) + number2;
  }

  sub(number2){
    this.result = parseInt(this.number1) - number2;
  }

}
