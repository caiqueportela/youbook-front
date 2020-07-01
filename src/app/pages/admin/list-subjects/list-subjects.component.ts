import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject } from 'src/app/models/subject';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-subjects',
  templateUrl: './list-subjects.component.html',
  styleUrls: ['./list-subjects.component.scss']
})
export class ListSubjectsComponent implements OnInit {

  subjects: Subject[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.subjects = this.activatedRoute.snapshot.data.subjects;
  }

}
