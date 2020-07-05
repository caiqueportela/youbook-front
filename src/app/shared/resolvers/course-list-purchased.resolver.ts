import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { CourseService } from 'src/app/shared/services/course/course.service';
import { CourseUser } from 'src/app/models/course-user';

@Injectable({
  providedIn: 'root'
})
export class CourseListPurchasedResolver implements Resolve<Observable<CourseUser[]>> {

  constructor(
    private service: CourseService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CourseUser[]> {
    return this.service.listPurshasedPaginated(1);
  }

}
