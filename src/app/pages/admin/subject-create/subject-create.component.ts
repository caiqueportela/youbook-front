import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { SubjectService } from 'src/app/shared/services/subject/subject.service';
import { MaterialStateMatcher } from 'src/app/shared/modules/angular-material/material-state-matcher';

@Component({
  selector: 'app-subject-create',
  templateUrl: './subject-create.component.html',
  styleUrls: ['./subject-create.component.scss']
})
export class SubjectCreateComponent implements OnInit {

  matcher = new MaterialStateMatcher();

  subjectForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private subjectService: SubjectService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.subjectForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      description: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
    });
  }

  createSubject() {
    if (this.subjectForm.valid) {
      const formData = this.subjectForm.getRawValue();

      this.subjectService
      .createSubject(formData)
      .subscribe(
        (res: any) => {
          this.snackBar.open('Assunto criado com sucesso!', 'X', { duration: 2000, panelClass: 'snack-success' });
          this.router.navigate(['admin', 'subject']);
        },
        (err) => {
          console.log(err);
          this.snackBar.open('Falha ao criar assunto!', 'X', { duration: 2000, panelClass: 'snack-danger' });
        }
      );
    }
  }

}
