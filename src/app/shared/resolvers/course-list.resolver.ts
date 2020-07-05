import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/shared/services/course/course.service';

@Injectable({
  providedIn: 'root'
})
export class CourseListResolver implements Resolve<Observable<Course[]>> {

  constructor(
    private service: CourseService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course[]> {
    return this.service.listPaginated(1);
  }

}
