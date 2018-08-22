import { CourseServiceService } from './../course-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
templateUrl:'./course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  sample = "Helllllllllllo Worlllld";
  title = "Course lists";
  isActive = true;
  courses;
  
  onclick(e){
    console.log(e)
  }

  typeFunc(e){
    console.log(e)
  }

  getTitle() {
    return this.title;  
  }
  constructor(service : CourseServiceService) { 


    this.courses = service.getCourses();
    
  }

  ngOnInit() {
  }

}
