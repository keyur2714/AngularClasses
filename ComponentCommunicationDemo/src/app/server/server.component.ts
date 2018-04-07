import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {Server} from './server';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverObject : Server = new Server();

  @Output()
  addNewServerEvent =new EventEmitter<Server>();

//   serverList = [
//     {
//     "serverName":"Server1",
//     "serverOs":"Linux"
//     },
//     {
//     "serverName":"Server2",
//     "serverOs":"Windows"
//     }
// ];

  constructor() { }

  ngOnInit() {
  }

  addServer(serverName,serverOs){
    this.serverObject.serverName = serverName;
    this.serverObject.serverOs = serverOs;
    console.log(this.serverObject.serverName+" "+this.serverObject.serverOs);
    this.serverObject = {"serverName":serverName,"serverOs":serverOs};
    console.log("1111");
    this.addNewServerEvent.emit(this.serverObject);
    //this.serverList.push();
  }

}
