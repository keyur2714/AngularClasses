import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from './student.model';
import { LoggingService } from '../logging.service';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [RegistrationService]
})
export class RegistrationComponent implements OnInit {

   @ViewChild("f")
   f:NgForm;

   newStudent: Student = new Student();

   headerColumnList : string[]=["Name","Fees","Course"];
   displayColumnList : string[]=["name","fees","course"];
   studentList: Student[] = [];

   isSubmitted:boolean = false;

  constructor(private loggingService:LoggingService,private registrationService: RegistrationService) { }

  ngOnInit() {  
    this.studentList = this.registrationService.getStudentList();
  }

  onSubmitForm(){
    this.loggingService.log(this.f+'');
    this.loggingService.log(this.f.value);
    this.loggingService.log(this.f.controls["name"].value);
    this.loggingService.log(this.f.controls["name"].invalid+'');
    this.isSubmitted = true;
    this.loggingService.log("Student Data:: "+this.newStudent.name+" "+this.newStudent.course);
    this.registrationService.register(this.newStudent);
  }
}
