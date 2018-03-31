import { Student } from './student.model';
export class RegistrationService{

    studentList: Student[] = [
        {
            name:"keyur",
            email:"keyurjava27@gmail.com",
            mobileNo:"7387029671",
            course:"Angular",
            fees:12000
        },
        {
            name:"denish",
            email:"denishjava26@gmail.com",
            mobileNo:"7387029672",
            course:"Java",
            fees:15000
        }
    ];

    getStudentList():Student[]{
        return this.studentList;
    }

    register(student:Student):void{
        this.studentList.push(student);
    }

}