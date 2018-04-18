import { Component,OnInit } from '@angular/core';
import { LoggingService } from './services/logging.service'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  
  constructor(private loggingService:LoggingService){}

  ngOnInit(){
    this.loggingService.infoLog("App Component Loaded...");
  }

}
