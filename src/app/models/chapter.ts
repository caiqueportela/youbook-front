import { Activity } from './activity';
import { Course } from './course';

export class Chapter {

  chapterId: number;
  course: Course;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  deleted: boolean;
  activities: Activity[];

}
