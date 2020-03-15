import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { COURSES } from '../db-data'
import { Course } from '../model/course';


@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  cardIndex: number;

  @Input()
  course: Course;

  @Output()
  courseSelected = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(){
  }
  
  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  onCourseViewed(){
    console.log("card-component clicked");
    this.courseSelected.emit(this.course)
  }

  //method 2
  cardClasses(){
    if(this.course.category == 'BEGINNER'){
      return ['beginner'];
    } else if (this.course.category == 'ADVANCED'){
      return ['advanced'];
    }
  }
  //method 1
  // cardClasses(){
  //   return  {
  //     'beginner': this.course.category == 'BEGINNER',
  //     'advanced': this.course.category == 'ADVANCED',
  //     // 'course-card': true
  //   }
  //}
}
