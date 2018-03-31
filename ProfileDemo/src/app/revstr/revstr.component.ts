import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-revstr',
  templateUrl: './revstr.component.html',
  styleUrls: ['./revstr.component.css']
})
export class RevstrComponent implements OnInit {

  reverseStr : string = '';
  strs :string []=[];
  @Output()
  revStringEvent = new EventEmitter<string[]>();

  constructor() { }

  ngOnInit() {
  }

  revStr(str:string){
    console.log(1);
    console.log(str.split("").reverse().join(""));
    this.reverseStr = str.split("").reverse().join("");
    this.strs[0]=str;
    this.strs[1]=this.reverseStr;
    this.revStringEvent.emit(this.strs);
  }
}
