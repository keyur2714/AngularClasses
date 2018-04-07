import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from './student.model';
import { LoggingService } from '../logging.service';
import { RegistrationService } from './registration.service';
import { Observable } from "rxjs/Observable";
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [RegistrationService]
})
export class RegistrationComponent implements OnInit {

   @ViewChild("f")
   f:NgForm;

   statusCode:number;
   isUpdate:boolean = false;

   newStudent: Student = new Student();

   headerColumnList : string[]=["Name","Fees","Course"];
   displayColumnList : string[]=["name","fees","course"];
   studentList: Student[] = [];
   isSubmitted:boolean = false;

  constructor(private loggingService:LoggingService,private registrationService: RegistrationService) { }

  ngOnInit() {  
    //this.registrationService.getStudentList();
    this.getAllStudentList();  
  }

  getAllStudentList(){
    this.registrationService.getStudentList().subscribe(
      (data) =>{
        console.log(data.json());
        this.studentList = data.json();
      }      
    )
  }

  onSubmitForm(){
    this.loggingService.log(this.f+'');
    this.loggingService.log(this.f.value);
    this.loggingService.log(this.f.controls["name"].value);
    this.loggingService.log(this.f.controls["name"].invalid+'');
    this.isSubmitted = true;
    this.loggingService.log("Student Data:: "+this.newStudent.name+" "+this.newStudent.course);
    this.registrationService.register(this.newStudent).subscribe(
      (data) => {
        console.log(data.status);
        this.statusCode = data.status;
        this.getAllStudentList();
      }
    );
      
  }

  update(){
    this.registrationService.update(this.newStudent).subscribe(
      (data) => {
        console.log(data.status);
        this.statusCode = data.status;
        this.getAllStudentList();
      }
    );
  }

  edit(id:number){
    this.isUpdate = true;
    this.loggingService.log(id+"");
    this.registrationService.get(id).subscribe(
      (data) => {
        this.newStudent = data.json();
      }
    );
  }

  delete(id:number){
    this.registrationService.delete(id).subscribe(
      (data) => {
         console.log(data);
         this.statusCode = data.status;   
         this.getAllStudentList();
      }
    );
  }
}
