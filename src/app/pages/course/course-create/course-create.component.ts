import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CourseService } from 'src/app/shared/services/course/course.service';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.scss']
})
export class CourseCreateComponent implements OnInit {

  constructor(
    private courseService: CourseService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createCourse(formData: any) {
    this.courseService
      .createCourse(formData)
      .subscribe(
        (res: any) => {
          this.snackBar.open('Curso criado com sucesso!', 'X', { duration: 2000, panelClass: 'snack-success' });
          this.router.navigate(['course', res.courseId]);
        },
        (err) => {
          console.log(err);
          this.snackBar.open('Falha ao criar curso!', 'X', { duration: 2000, panelClass: 'snack-danger' });
        }
      );
  }

}
