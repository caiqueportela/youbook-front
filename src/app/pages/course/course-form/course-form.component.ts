import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Course } from 'src/app/models/course';
import { MaterialStateMatcher } from 'src/app/shared/modules/angular-material/material-state-matcher';
import { Subject } from 'src/app/models/subject';
import { SubjectService } from 'src/app/shared/services/subject/subject.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  @Input() course: Course;

  @Output() formSubmit = new EventEmitter<any>();

  public options = {
    charCounterCount: true,
    language: 'pt_br',
    height: 500,
  };

  matcher = new MaterialStateMatcher();
  courseForm: FormGroup;
  subjects: Subject[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private subjectService: SubjectService
  ) { }

  ngOnInit(): void {
    this.subjectService
      .getSubjects()
      .subscribe(subjects => this.subjects = subjects);

    this.courseForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      subtitle: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(255)]],
      subject: [0, [Validators.required, Validators.min(1)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
    });

    if (this.course) {
      this.populateForm();
    }
  }

  populateForm() {
    this.courseForm.patchValue({
      title: this.course.title,
      subtitle: this.course.subtitle,
      subject: this.course.subject.subjectId,
      description: this.course.description,
    });
  }

  sendForm() {
    if (this.courseForm.valid) {
      this.formSubmit.emit(this.courseForm.getRawValue());
    }
  }

}
