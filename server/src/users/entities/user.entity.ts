import { Post } from 'src/posts/entities/post.entity';

export class User {
  id: number;
  email: string;
  name: string;
  post: Post[];
}
