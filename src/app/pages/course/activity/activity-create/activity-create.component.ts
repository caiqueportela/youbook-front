import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CourseService } from 'src/app/shared/services/course/course.service';

@Component({
  selector: 'app-activity-create',
  templateUrl: './activity-create.component.html',
  styleUrls: ['./activity-create.component.scss']
})
export class ActivityCreateComponent implements OnInit {

  courseId: number;
  chapterId: number;

  constructor(
    private activatedRouter: ActivatedRoute,
    private courseService: CourseService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.courseId = this.activatedRouter.snapshot.params.courseId;
    this.chapterId = this.activatedRouter.snapshot.params.chapterId;
  }

  createActivity(formData: any) {
    this.courseService
      .createActivity(this.courseId, this.chapterId, formData)
      .subscribe(
        (res: any) => {
          this.snackBar.open('Atividade criada com sucesso!', 'X', { duration: 2000, panelClass: 'snack-success' });
          this.router.navigate(['course', this.courseId]);
        },
        (err) => {
          console.log(err);
          this.snackBar.open('Falha ao criar atividade!', 'X', { duration: 2000, panelClass: 'snack-danger' });
        }
      );
  }

}
