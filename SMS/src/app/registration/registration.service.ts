import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { Http,Response } from '@angular/http';
import { Observable } from "rxjs/Observable"
@Injectable()
export class RegistrationService{

    registrationUrl : string = "http://localhost:3000/studentDetails";

    constructor(private http:Http){}

    // studentList: Student[] = [
    //     {
    //         name:"keyur",
    //         email:"keyurjava27@gmail.com",
    //         mobileNo:"7387029671",
    //         course:"Angular",
    //         fees:12000
    //     },
    //     {
    //         name:"denish",
    //         email:"denishjava26@gmail.com",
    //         mobileNo:"7387029672",
    //         course:"Java",
    //         fees:15000
    //     }
    // ];

    getStudentList():Observable<Response>{
        return this.http.get(this.registrationUrl);
    }

    register(student:Student):Observable<Response>{
        return this.http.post(this.registrationUrl,student);
    }

    update(student:Student):Observable<Response>{
        return this.http.put(this.registrationUrl+"/"+student.id,student);
    }

    get(id:number):Observable<Response>{
        return this.http.get(this.registrationUrl+"/"+id);
    }

    delete(id:number):Observable<Response>{
        return this.http.delete(this.registrationUrl+"/"+id);
    }
    // register(student:Student):void{
    //     this.studentList.push(student);
    // }

}