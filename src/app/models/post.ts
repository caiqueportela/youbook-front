import { User } from 'src/app/models/user';

export class Post {

  postId: number;
  owner: User;
  message: string;
  createdAt: Date;
  updatedAt: Date;

}
