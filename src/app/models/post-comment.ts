import { Post } from 'src/app/models/post';
import { Comment } from 'src/app/models/comment';

export class PostComment extends Comment {

  post: Post;

}
