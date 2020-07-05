import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Activity } from 'src/app/models/activity';
import { CourseService } from 'src/app/shared/services/course/course.service';

@Component({
  selector: 'app-activity-edit',
  templateUrl: './activity-edit.component.html',
  styleUrls: ['./activity-edit.component.scss']
})
export class ActivityEditComponent implements OnInit {

  activity: Activity;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.activity = this.activatedRoute.snapshot.data.activity;
  }

  updateActivity(formData: any) {
    this.courseService
      .updateActivity(this.activity.chapter.course.courseId, this.activity.chapter.chapterId, this.activity.activityId, formData)
      .subscribe(
        (res: any) => {
          this.snackBar.open('Atividade atualizado com sucesso!', 'X', { duration: 2000, panelClass: 'snack-success' });
          this.router.navigate(['course', this.activity.chapter.course.courseId]);
        },
        (err) => {
          console.log(err);
          this.snackBar.open('Falha ao atualizar atividade!', 'X', { duration: 2000, panelClass: 'snack-danger' });
        }
      );
  }

}
