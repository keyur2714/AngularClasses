import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.css']
})
export class ManageStudentsComponent implements OnInit {

  studentList : Student[] = []; 
  student1 : Student = new Student();

  // student = {
  //   "id":27,
  //   "name":"keyur",
  //   "course":"Angular",
  //   "fees":12000,
  //   "mobileNo":"7387029671",
  //   "email":"keyurjava27@gmail.com"
  // }
  n : number[] = [1,2,3];  
  constructor() {
    for(let i of this.n){
      console.log(i);
    }
   }

  ngOnInit() {
    this.student1.id = 27;
    this.student1.name = "keyur";
    this.student1.course = "Angular";
    this.student1.fees = 12000;
    this.student1.mobileNo = "7387029671";
    this.student1.email = "keyurjava27@gmail.com";
    this.studentList.push(this.student1);
  }

}
