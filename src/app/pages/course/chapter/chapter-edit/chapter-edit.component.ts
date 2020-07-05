import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Chapter } from 'src/app/models/chapter';
import { CourseService } from 'src/app/shared/services/course/course.service';

@Component({
  selector: 'app-chapter-edit',
  templateUrl: './chapter-edit.component.html',
  styleUrls: ['./chapter-edit.component.scss']
})
export class ChapterEditComponent implements OnInit {

  chapter: Chapter;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.chapter = this.activatedRoute.snapshot.data.chapter;
  }

  updateChapter(formData: any) {
    this.courseService
      .updateChapter(this.chapter.course.courseId, this.chapter.chapterId, formData)
      .subscribe(
        (res: any) => {
          this.snackBar.open('Capitulo atualizado com sucesso!', 'X', { duration: 2000, panelClass: 'snack-success' });
          this.router.navigate(['course', this.chapter.course.courseId]);
        },
        (err) => {
          console.log(err);
          this.snackBar.open('Falha ao atualizar capitulo!', 'X', { duration: 2000, panelClass: 'snack-danger' });
        }
      );
  }

}
