import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { CourseService } from 'src/app/shared/services/course/course.service';
import { Activity } from 'src/app/models/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityDetailResolver implements Resolve<Observable<Activity>> {

  constructor(
    private service: CourseService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Activity> {
    const courseId: number = route.params.courseId;
    const chapterId: number = route.params.chapterId;
    const activityId: number = route.params.activityId;

    return this.service.retrieveActivity(courseId, chapterId, activityId);
  }

}
