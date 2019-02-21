import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[] = [{
    id: 1,
    name: 'Shilpi',
    enrollmentNumber: 1211098,
    college: 'JM Engineering College',
    university: 'KUK'
},
{
    id: 2,
    name: 'Shivangni',
    enrollmentNumber: 1211099,
    college: 'JM Engineering College',
    university: 'KUK'
},
{
    id: 3,
    name: 'Ankita',
    enrollmentNumber: 1211096,
    college: 'JM Engineering College',
    university: 'KUK'
}];

  constructor() { }

  public getStudents(): any {
    const studentsObservable = new Observable(observer => {
           setTimeout(() => {
               observer.next(this.students);
           }, 1000);
    });

    return studentsObservable;
}



}
