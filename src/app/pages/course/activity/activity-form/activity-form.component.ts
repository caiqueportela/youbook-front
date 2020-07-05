import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Activity } from 'src/app/models/activity';
import { MaterialStateMatcher } from 'src/app/shared/modules/angular-material/material-state-matcher';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.scss']
})
export class ActivityFormComponent implements OnInit {

  @Input() activity: Activity;

  @Output() formSubmit = new EventEmitter<any>();

  public options = {
    charCounterCount: true,
    language: 'pt_br',
    height: 500,
  };

  matcher = new MaterialStateMatcher();
  activityForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.activityForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      content: ['', [Validators.required, Validators.minLength(10)]],
    });

    if (this.activity) {
      this.populateForm();
    }
  }

  populateForm() {
    this.activityForm.patchValue({
      title: this.activity.title,
      content: this.activity.content,
    });
  }

  sendForm() {
    if (this.activityForm.valid) {
      this.formSubmit.emit(this.activityForm.getRawValue());
    }
  }

}
