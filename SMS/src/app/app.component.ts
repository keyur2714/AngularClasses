import { Component,OnInit } from '@angular/core';
import { LoggingService } from './logging.service';
import { RegistrationService } from './registration/registration.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private loggingService:LoggingService){
    loggingService.log("i am always first.");
  }

  ngOnInit(){
    this.loggingService.log("i am second.");    
  }

}

