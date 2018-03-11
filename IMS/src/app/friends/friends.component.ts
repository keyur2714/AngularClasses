import { Component, OnInit, EventEmitter, Output,Input } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  //friendsList: string[] = [];
  @Input()
  age:number;

  @Output("getNewFriend")
  getNewFriendEvent= new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    let list = [4, 5, 6];
    for (let i in list) {
      console.log(i+" "+list[i]); // "0", "1", "2",
    }
  }

  addNewFriend(friendName){
    console.log("1: "+friendName);
    //this.friendsList.push(friendName);
    this.getNewFriendEvent.emit(friendName+" Age: "+this.age);
  }
}
