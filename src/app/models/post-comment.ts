import { User } from 'src/app/models/user';
import { Post } from 'src/app/models/post';

export class PostComment {

  commentId: number;
  owner: User;
  message: string;
  createdAt: Date;
  updatedAt: Date;
  post: Post;

}
