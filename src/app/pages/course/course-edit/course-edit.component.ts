import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/shared/services/course/course.service';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.scss']
})
export class CourseEditComponent implements OnInit {

  course: Course;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.course = this.activatedRoute.snapshot.data.course;
  }

  updateCourse(formData: any) {
    this.courseService
      .updateCourse(this.course, formData)
      .subscribe(
        (res: any) => {
          this.snackBar.open('Curso atualizado com sucesso!', 'X', { duration: 2000, panelClass: 'snack-success' });
          this.router.navigate(['course', this.course.courseId]);
        },
        (err) => {
          console.log(err);
          this.snackBar.open('Falha ao atualizar curso!', 'X', { duration: 2000, panelClass: 'snack-danger' });
        }
      );
  }

}
