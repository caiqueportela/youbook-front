import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Article } from 'src/app/models/article';
import { SubjectService } from 'src/app/shared/services/subject/subject.service';
import { Subject } from 'src/app/models/subject';
import { MaterialStateMatcher } from 'src/app/shared/modules/angular-material/material-state-matcher';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {

  @Input() article: Article;

  @Output() formSubmit = new EventEmitter<any>();

  public options = {
    charCounterCount: true,
    language: 'pt_br',
    height: 500,
  };

  matcher = new MaterialStateMatcher();
  articleForm: FormGroup;
  subjects: Subject[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private subjectService: SubjectService
  ) { }

  ngOnInit(): void {
    this.subjectService
      .getSubjects()
      .subscribe(subjects => this.subjects = subjects);

    this.articleForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      subtitle: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(255)]],
      subject: [0, [Validators.required, Validators.min(1)]],
      content: ['', [Validators.required, Validators.minLength(10)]],
    });

    if (this.article) {
      this.populateForm();
    }
  }

  populateForm() {
    this.articleForm.patchValue({
      title: this.article.title,
      subtitle: this.article.subtitle,
      subject: this.article.subject.subjectId,
      content: this.article.content,
    });
  }

  sendForm() {
    if (this.articleForm.valid) {
      this.formSubmit.emit(this.articleForm.getRawValue());
    }
  }

}
