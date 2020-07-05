import { CourseUserActivity } from './course-user-activity';
import { User } from './user';
import { Course } from './course';

export class CourseUser {

  courseUserId: number;
  owner: User;
  course: Course;
  percentagem: number;
  startedAt: Date;
  concludedAt: Date;
  activities: CourseUserActivity;

}
