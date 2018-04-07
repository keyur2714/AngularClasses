import { Component, OnInit,Input } from '@angular/core';
import { Server } from '../server/server';
@Component({
  selector: 'app-parent-server',
  templateUrl: './parent-server.component.html',
  styleUrls: ['./parent-server.component.css']
})
export class ParentServerComponent implements OnInit {

  @Input()
  serverList : Server[] = [];
  constructor() { }

  ngOnInit() {
  }

  addNewServer(newServerObject){
    this.serverList.push(newServerObject);
  }
}
