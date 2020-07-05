import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { CourseService } from 'src/app/shared/services/course/course.service';
import { Course } from 'src/app/models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseDetailResolver implements Resolve<Observable<Course>> {

  constructor(
    private service: CourseService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {
    const courseId: number = route.params.courseId;

    return this.service.retrieveCourse(courseId);
  }

}
