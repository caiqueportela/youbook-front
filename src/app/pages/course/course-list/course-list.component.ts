import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/shared/services/course/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  courses: Course[] = [];
  hasMore = true;
  currentPage = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
  ) { }

  ngOnInit(): void {
    this.courses = this.activatedRoute.snapshot.data.courses;
  }

  load(): void {
    this.courseService
      .listPaginated(++this.currentPage)
      .subscribe(courses => {
        this.courses = this.courses.concat(courses);
        if (!courses.length) {
          this.hasMore = false;
        }
      });
  }

}
