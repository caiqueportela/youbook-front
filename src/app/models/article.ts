import { User } from 'src/app/models/user';
import { Subject } from 'src/app/models/subject';
import { Group } from 'src/app/models/group';

export class Article {

  articleId: number;
  owner: User;
  message: string;
  subject: Subject;
  title: string;
  subtitle: string;
  createdAt: Date;
  updatedAt: Date;
  content: string;
  group: Group;

}
