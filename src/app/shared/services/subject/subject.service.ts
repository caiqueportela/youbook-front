import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Subject } from 'src/app/models/subject';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(
    private http: HttpClient
  ) { }

  getSubjects(): Observable<Subject[]> {
    return this.http
      .get<Subject[]>(`${API_URL}/api/subjects`);
  }

  createSubject(formData: any) {
    return this.http
      .post(`${API_URL}/api/subject`, formData);
  }

}
