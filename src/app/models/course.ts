import { Evaluation } from './evaluation';
import { Chapter } from './chapter';
import { User } from './user';
import { Subject } from './subject';
import { Group } from './group';

export class Course {

  courseId: number;
  subject: Subject;
  owner: User;
  group: Group;
  title: string;
  subtitle: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  chapters: Chapter[];
  deleted: boolean;
  evaluations: Evaluation[];

  constructor() {
  }

}
