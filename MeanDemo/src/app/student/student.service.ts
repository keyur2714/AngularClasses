import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs';
@Injectable()
export class StudentService {

    constructor(private http:Http){}

    getAllStudents():Observable<Response>{
        return this.http.get('/api/studentList');
    }

}