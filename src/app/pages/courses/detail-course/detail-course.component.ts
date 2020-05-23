import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/internal/operators';

@Component({
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.scss']
})
export class DetailCourseComponent implements OnInit {

  courseId: number;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.courseId = Number.parseInt(this.route.snapshot.paramMap.get('courseId'), 0);
  }

}
