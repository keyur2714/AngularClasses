import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { Http,Response,RequestOptions,Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class RegistrationService{

    registrationUrl : string = "http://localhost:3000/studentDetails";

    constructor(private http:Http,private httpClient:HttpClient){}

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

    getStudentList():Observable<Student[]>{
        return this.http.get(this.registrationUrl)
        .map(this.extractData)
        .catch(this.handleError);
    }

    getStudentListWithHttpClient():Observable<Student[]>{
        return this.httpClient.get<Student[]>(this.registrationUrl);        
    }

    register(student:Student):Observable<number>{
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.post(this.registrationUrl,student,options)
        .map(data => data.status)
        .catch(this.handleError);
    }

    update(student:Student):Observable<number>{
        return this.http.put(this.registrationUrl+"/"+student.id,student)
        .map(data=> data.status)
        .catch(this.handleError);
    }

    get(id:number):Observable<Student>{
        return this.http.get(this.registrationUrl+"/"+id)
        .map(this.extractData)
        .catch(this.handleError);
    }

    delete(id:number):Observable<number>{
        return this.http.delete(this.registrationUrl+"/"+id)
        .map(data=>data.status)
        .catch(this.handleError);
    }
    // register(student:Student):void{
    //     this.studentList.push(student);
    // }

    extractData(data:Response){
        let students: Student[] = data.json();
        for(let s of students){
            s.name = s.name.toUpperCase() ;
        }
        return students;
    }

    handleError(errorResponse:Response){
        return Observable.throw(errorResponse.status);
    }

}