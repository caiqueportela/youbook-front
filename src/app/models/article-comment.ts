import { Article } from 'src/app/models/article';
import { Comment } from 'src/app/models/comment';

export class ArticleComment extends Comment {

  article: Article;

}
