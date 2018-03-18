import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  message = "Hi...";

  constructor() {
    console.log("Hi...");
   }

  ngOnInit() {
    console.log("Hello..");
    this.message = "Hi Keyur";
    this.sayHello();
  }

  sayHello(){
    console.log("Say Hello...");
  }

}
