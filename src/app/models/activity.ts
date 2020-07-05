import { ActivityComment } from './activity-comment';
import { Chapter } from './chapter';

export class Activity {

  activityId: number;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  deleted: boolean;
  chapter: Chapter;
  comments: ActivityComment[];

}
