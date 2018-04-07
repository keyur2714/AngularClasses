import { Component , ViewChild, ElementRef } from '@angular/core';
import { NumberComponent } from './number/number.component'
import { StopwatchComponent } from './stopwatch/stopwatch.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @ViewChild("number1")
  number1 : ElementRef;

  @ViewChild("number2")
  number2 : ElementRef;

  @ViewChild(NumberComponent)
  private numberComponent : NumberComponent;

  @ViewChild(StopwatchComponent)
  private stopWatchComponent : StopwatchComponent;

  increase(){
    console.log(this.number2);
    this.numberComponent.add(parseInt(this.number2.nativeElement.value));
  }

  decrease(){
    this.numberComponent.sub(parseInt(this.number2.nativeElement.value));
  }


  startStopwatch() {
           this.stopWatchComponent.start();
	}
	stopStopwatch() {
           this.stopWatchComponent.stop();
	}

}
