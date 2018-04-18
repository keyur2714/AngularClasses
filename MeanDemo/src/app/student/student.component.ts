import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { Student } from './student';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentList:Student[] = [];
  constructor(private studentService:StudentService) { }

  ngOnInit() {
    this.getAllStudents();
  }

  getAllStudents(){
    this.studentService.getAllStudents().subscribe(
       (response)=>{
          console.log(response.json());
          this.studentList = response.json();
       },
       (error)=>{
       }
    )
  }

}
