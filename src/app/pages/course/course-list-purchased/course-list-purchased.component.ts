import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CourseService } from 'src/app/shared/services/course/course.service';
import { CourseUser } from 'src/app/models/course-user';

@Component({
  selector: 'app-course-list-purchased',
  templateUrl: './course-list-purchased.component.html',
  styleUrls: ['./course-list-purchased.component.scss']
})
export class CourseListPurchasedComponent implements OnInit {

  courses: CourseUser[] = [];
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
      .listPurshasedPaginated(++this.currentPage)
      .subscribe(courses => {
        this.courses = this.courses.concat(courses);
        if (!courses.length) {
          this.hasMore = false;
        }
      });
  }

}
