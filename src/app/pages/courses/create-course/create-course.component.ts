import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss'],
})
export class CreateCourseComponent implements OnInit {

  separatorKeysCodes: number[] = [ENTER, COMMA];
  form: FormGroup;
  keywords = [];

  chapters = [
    'Capitulo 1',
    'Capitulo 2',
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      author: [{ value: 'Caique', disabled: true }, Validators.required],
      subject: ['', Validators.required],
      keywords: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;


    if ((value || '').trim()) {
      this.keywords.push(value.trim());
    }

    if (input) {
      input.value = '';
    }

    this.form.get('keyword').setValue(null);
  }

  remove(keyword: string): void {
    const index = this.keywords.indexOf(keyword);

    if (index >= 0) {
      this.keywords.splice(index, 1);
    }
  }

  editCourse(): void {

  }

}
