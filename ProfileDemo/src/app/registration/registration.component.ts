import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  displayColumns = ["name","course","fees"];
  studentList : Student[] = [
    {
      "name":"keyur",
      "mobileNo":"7387029671",
      "course":"Angular",
      "fees":12000,
      "email":"keyurjava27@gmail.com"
    },
    {
      "name":"denish",
      "mobileNo":"8600712124",
      "course":"Java",
      "fees":15000,
      "email":"denishjava24@gmail.com"
    }
  ];
  student : Student = new Student();
  newStudent : Student;
  isSubmitted : boolean = false;
  myMessage:string = "";

  messageList:string[]=["Hello How are you?","I am finne.","Good Morning"];
  constructor() { }

  ngOnInit() {
    // this.student.name = "keyur";
    // this.student.mobileNo = "7387029671";
  }

  save(){
    console.log("Save Request...");
    this.newStudent = new Student(); 
    this.newStudent.name = this.student.name;
    this.newStudent.email = this.student.email;
    this.newStudent.mobileNo = this.student.mobileNo;
    this.newStudent.fees = this.student.fees;
    this.newStudent.course = this.student.course;
    this.studentList.push(this.newStudent);
    this.myMessage = "Student Register Successfully";
    this.isSubmitted = true;
  }
}
