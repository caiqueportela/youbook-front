import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CourseService } from 'src/app/shared/services/course/course.service';
import { Course } from 'src/app/models/course';
import { Chapter } from 'src/app/models/chapter';
import { Activity } from 'src/app/models/activity';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {

  course: Course;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.course = this.activatedRoute.snapshot.data.course;
  }

  deleteCourse() {
    this.courseService
      .deleteCourse(this.course)
      .subscribe(
        () =>
          this.router.navigate(['course']),
        (err) => {
          console.log(err);
          this.snackBar.open('Falha ao deletar curso', 'X', { duration: 2000, panelClass: 'snack-danger' });
        }
      );
  }

  deleteChapter(chapter: Chapter) {
    this.courseService
      .deleteChapter(this.course.courseId, chapter.chapterId)
      .subscribe(
        () =>
          this.course.chapters = this.course.chapters.filter(c => c.chapterId !== chapter.chapterId),
        (err) => {
          console.log(err);
          this.snackBar.open('Falha ao deletar capitulo', 'X', { duration: 2000, panelClass: 'snack-danger' });
        }
      );
  }

  deleteActivity(chapter: Chapter, activity: Activity) {
    this.courseService
      .deleteActivity(this.course.courseId, chapter.chapterId, activity.activityId)
      .subscribe(
        () =>
          this.course.chapters = this.course.chapters.map(c => {
            if (c.chapterId === chapter.chapterId) {
              c.activities = c.activities.filter(a => a.activityId !== activity.activityId);
            }
            return c;
          }),
        (err) => {
          console.log(err);
          this.snackBar.open('Falha ao deletar atividade', 'X', { duration: 2000, panelClass: 'snack-danger' });
        }
      );
  }

  buyCourse() {
    this.courseService
      .buyCourse(this.course)
      .subscribe(
        () =>
          this.router.navigate(['course', 'purchased']),
        (err) => {
          console.log(err);
          this.snackBar.open('Falha ao comprar curso', 'X', { duration: 2000, panelClass: 'snack-danger' });
        }
      );
  }

}
