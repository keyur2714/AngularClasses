import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.css']
})
export class CalculationComponent implements OnInit {

  result:number;


  constructor() { }

  ngOnInit() {
  }

  add(n1:number,n2:number){
    this.result = n1+n2;    
  }

  sub(n1:number,n2:number){
    this.result = n1-n2;
  }
}
