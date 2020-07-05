import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CourseService } from 'src/app/shared/services/course/course.service';

@Component({
  selector: 'app-chapter-create',
  templateUrl: './chapter-create.component.html',
  styleUrls: ['./chapter-create.component.scss']
})
export class ChapterCreateComponent implements OnInit {

  courseId: number;

  constructor(
    private activatedRouter: ActivatedRoute,
    private courseService: CourseService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.courseId = this.activatedRouter.snapshot.params.courseId;
  }

  createChapter(formData: any) {
    this.courseService
      .createChapter(this.courseId, formData)
      .subscribe(
        (res: any) => {
          this.snackBar.open('Capitulo criado com sucesso!', 'X', { duration: 2000, panelClass: 'snack-success' });
          this.router.navigate(['course', this.courseId]);
        },
        (err) => {
          console.log(err);
          this.snackBar.open('Falha ao criar capitulo!', 'X', { duration: 2000, panelClass: 'snack-danger' });
        }
      );
  }

}
