import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Chapter } from 'src/app/models/chapter';
import { MaterialStateMatcher } from 'src/app/shared/modules/angular-material/material-state-matcher';

@Component({
  selector: 'app-chapter-form',
  templateUrl: './chapter-form.component.html',
  styleUrls: ['./chapter-form.component.scss']
})
export class ChapterFormComponent implements OnInit {

  @Input() chapter: Chapter;

  @Output() formSubmit = new EventEmitter<any>();

  public options = {
    charCounterCount: true,
    language: 'pt_br',
    height: 500,
  };

  matcher = new MaterialStateMatcher();
  chapterForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.chapterForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
    });

    if (this.chapter) {
      this.populateForm();
    }
  }

  populateForm() {
    this.chapterForm.patchValue({
      title: this.chapter.title,
      description: this.chapter.description,
    });
  }

  sendForm() {
    if (this.chapterForm.valid) {
      this.formSubmit.emit(this.chapterForm.getRawValue());
    }
  }

}
