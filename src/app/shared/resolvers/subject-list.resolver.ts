import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Subject } from 'src/app/models/subject';
import { SubjectService } from './../services/subject/subject.service';

@Injectable({
  providedIn: 'root'
})
export class SubjectListResolver implements Resolve<Observable<Subject[]>> {

  constructor(
    private service: SubjectService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Subject[]> {
    return this.service.getSubjects();
  }

}
