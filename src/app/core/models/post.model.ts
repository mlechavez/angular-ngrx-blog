import { PostCategory } from './post-category.model';
import { User } from './user.model';

export interface Post {
  _id: string;
  title: string;
  slug: string;
  image: string;
  summary: string;
  content: string;
  published: boolean;
  publishedDate: Date;
  category: PostCategory;
  author: User;
  createdAt: Date;
}
