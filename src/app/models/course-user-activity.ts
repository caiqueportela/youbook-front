import { CourseUser } from './course-user';
import { Activity } from './activity';

export class CourseUserActivity {

  courseUserActivityId: number;
  courseUser: CourseUser;
  activity: Activity;
  viewedAt: Date;

}
