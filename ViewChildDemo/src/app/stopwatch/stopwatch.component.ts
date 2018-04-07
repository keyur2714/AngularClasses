import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit {

  constructor() { }

  counter:number = 0;
  shouldRun:boolean = false;

  ngOnInit() {
  }

  start() {
	      this.shouldRun = true;
	      let interval = setInterval(() =>
  	        {  
		            if(this.shouldRun === false){
			            clearInterval(interval);
		            }
		          this.counter = this.counter + 1;			
	          }, 100);
	}

  stop() {
	      this.shouldRun = false;
	}

}
