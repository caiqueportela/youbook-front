import { User } from 'src/app/models/user';

export abstract class Comment {

  commentId: number;
  owner: User;
  message: string;
  createdAt: Date;
  updatedAt: Date;

}
