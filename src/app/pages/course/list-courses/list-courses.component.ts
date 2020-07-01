import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/internal/operators';

import { Course } from 'src/app/models/course';

@Component({
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.scss']
})
export class ListCoursesComponent implements OnInit {

  courses: Course[] = [
    Course.mockCourse(),
    Course.mockCourse(),
    Course.mockCourse(),
    Course.mockCourse(),
    Course.mockCourse(),
    Course.mockCourse(),
    Course.mockCourse(),
    Course.mockCourse(),
    Course.mockCourse(),
    Course.mockCourse(),
    Course.mockCourse(),
    Course.mockCourse(),
  ];

  searchCourse = new FormControl();

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.searchCourse.valueChanges
      .pipe(
        debounceTime(1000)
      )
      .subscribe(v => console.log(v));
  }

  selectCourse(course: Course): void {
    this.router.navigate([
      `courses/${course.id}`
    ]);
  }

}
