import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CourseService } from 'src/app/shared/services/course/course.service';
import { Course } from 'src/app/models/course';
import { Chapter } from 'src/app/models/chapter';
import { Activity } from 'src/app/models/activity';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.scss']
})
export class CourseViewComponent implements OnInit {

  course: Course;
  activities: Activity[] = [];
  selectedChapter: Chapter;
  selectedActivity: Activity;
  canConclude = false;
  percentage = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    private snackBar: MatSnackBar,
    private router: Router,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.course = this.activatedRoute.snapshot.data.course;
    this.selectChapter(this.course.chapters[0]);
  }

  selectChapter(chapter: Chapter) {
    this.selectedChapter = chapter;
    this.activities = chapter.activities;
    this.selectActivity(this.activities[0]);
  }

  selectActivity(activity: Activity) {
    this.selectedActivity = activity;
    this.changeDetector.detectChanges();

    this.courseService
      .markViewActivity(this.course.courseId, this.selectedChapter.chapterId, activity.activityId)
      .subscribe(
        (res: any) => {
          this.percentage = Number(res.percentage);
          if (this.percentage >= 90) {
            this.canConclude = true;
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }

  nextActivity() {
    const index = this.activities.indexOf(this.selectedActivity);
    if (this.activities.length === (index + 1)) {
      const chapterIndex = this.course.chapters.indexOf(this.selectedChapter);
      if (this.course.chapters.length === (chapterIndex + 1)) {
        this.concludeCourse();
      } else {
        this.selectChapter(this.course.chapters[(chapterIndex + 1)]);
      }
    } else {
      this.selectActivity(this.activities[(index + 1)]);
    }
  }

  concludeCourse() {
    this.courseService
      .concludeCourse(this.course.courseId)
      .subscribe(
        () => {
          this.snackBar.open('Curso concluido com sucesso!', 'X', { duration: 2000, panelClass: 'snack-success' });
          this.router.navigate(['course']);
        },
        (err) => {
          console.log(err);
          this.snackBar.open('Falha ao concluir curso', 'X', { duration: 2000, panelClass: 'snack-danger' });
        }
      );
  }

}
