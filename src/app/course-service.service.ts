import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {
  getCourses(){
    return ['Course1','Course2','Course3'];
}
  constructor() { }
}
