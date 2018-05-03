import { Component,HostBinding  } from '@angular/core';
import { ON_OFF_ANIMATION } from './animations/on-off.animation';
import { ON_OFF_2_ANIMATION } from './animations/on-off-2.animation';
import { ROUND_ANTICLOCK_ANIMATION } from './animations/round-anticlock.animation';
import { STATE_ANIMATIONS } from './animations/state-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ON_OFF_ANIMATION,
              ON_OFF_2_ANIMATION,
              ROUND_ANTICLOCK_ANIMATION,
              STATE_ANIMATIONS
            ]
})
export class AppComponent {
   @HostBinding('@roundAntiClockTrigger') roundAntiClockTrigger = 'in';
   @HostBinding('style.display')   display = 'block';
   //@HostBinding('style.position')  position = 'absolute'; 
  title = 'Animation Demo';
  state = "on";
  rowstate = "on";

  newState = "stop";

  toggleState():void{
    this.state = this.state == 'on' ? 'off' : 'on';
  }
  toggleRowState():void{
    this.rowstate = this.rowstate == 'on' ? 'off' : 'on';
  }
  friendsName:string[]=["keyur","denish","vinit"];

  changeState():void{
    this.newState = this.newState == 'start' ? 'stop' : 'start';
  }
}
