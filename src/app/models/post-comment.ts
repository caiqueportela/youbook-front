import { User } from 'src/app/models/user';

export class PostComment {

  commentId: number;
  owner: User;
  message: string;
  createdAt: Date;
  updatedAt: Date;

}
