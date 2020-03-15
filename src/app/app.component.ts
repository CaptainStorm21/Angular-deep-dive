import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
     courses = COURSES;

  startDate = new Date (2000, 3, 23);

  title = COURSES[0].description;
  price = 2319.99;
  rate = 23.3432;

  course = COURSES[0];

  onCourseSelected (course:Course){
    console.log("bubbly", course)
  }
}
