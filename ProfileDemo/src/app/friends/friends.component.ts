import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  testStr:string = "ddd";
  friendsList:string[] = ["keyur","denish","vinit"];
  constructor() {
    console.log("Hi...");
   }

  ngOnInit() {
    this.friendsList.push("Ami");
    this.friendsList.push("Darsh");
  }

  addNewFriend(name:string):void{
    this.friendsList.push(name);
    //this.friendsList.splice(3,1);
  }
}
