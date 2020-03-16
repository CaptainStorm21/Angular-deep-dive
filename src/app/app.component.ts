import { Component, ViewChild, ElementRef } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = COURSES;

  @ViewChild('cardRef1', {read: ElementRef}) 
  card1: ElementRef;

  @ViewChild('container')
  containerDiv: ElementRef;

  // @ViewChild('cardRef2') 
  // card2: CourseCardComponent;

  // startDate = new Date (2000, 3, 23);
  // title = COURSES[0].description;
  // price = 2319.99;
  // rate = 23.3432;
  // course = COURSES[0];

  onCourseSelected (course:Course){
    // console.log("bubbly", course)
    console.log('card 1', this.card1)
    // console.log('card 2', this.card2)
    console.log('containerDiv', this.containerDiv)
  }
}
