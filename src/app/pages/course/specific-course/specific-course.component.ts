import { Component, OnInit, Input } from '@angular/core';

import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-specific-course',
  templateUrl: './specific-course.component.html',
  styleUrls: ['./specific-course.component.scss']
})
export class SpecificCourseComponent implements OnInit {

  @Input() course: Course;
  @Input() purchased: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
