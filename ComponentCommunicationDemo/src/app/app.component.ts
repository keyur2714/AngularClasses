import { Component,ViewChild,ElementRef } from '@angular/core';
import { Server } from './server/server';
import { ParentServerComponent } from './parent-server/parent-server.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Component Communication';

  serverHeader = "Server Details";

  @ViewChild("serverName")
  serverName: ElementRef;

  @ViewChild("serverOs")
  serverOs: ElementRef;

  @ViewChild(ParentServerComponent)
  parentServerComponent: ParentServerComponent;
  
  serverList : Server[]= [
    {
    "serverName":"Server1",
    "serverOs":"Linux"
    },
    {
    "serverName":"Server2",
    "serverOs":"Windows"
    }
  ];

  addNewServer(newServer){
    console.log("2222");
    console.log(newServer);
    this.serverList.push(newServer);
  }

  // addServer(serverName,serverOs){
  //   let tempServer = new Server();
  //   tempServer.serverName = serverName;
  //   tempServer.serverOs = serverOs;
  //   this.parentServerComponent.addNewServer(tempServer);
  // }
  addServer(){
     let tempServer = new Server();
     tempServer.serverName = this.serverName.nativeElement.value;
     tempServer.serverOs = this.serverOs.nativeElement.value;
     this.parentServerComponent.addNewServer(tempServer);
  }
}
