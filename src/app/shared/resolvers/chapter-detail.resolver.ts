import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { CourseService } from 'src/app/shared/services/course/course.service';
import { Chapter } from 'src/app/models/chapter';

@Injectable({
  providedIn: 'root'
})
export class ChapterDetailResolver implements Resolve<Observable<Chapter>> {

  constructor(
    private service: CourseService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Chapter> {
    const courseId: number = route.params.courseId;
    const chapterId: number = route.params.chapterId;

    return this.service.retrieveChapter(courseId, chapterId);
  }

}
