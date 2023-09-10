import { User } from 'src/users/entities/user.entity';

export class Post {
  id: number;
  title: string;
  content?: string;
  published?: boolean;
  authorId?: number;
  author?: User;
}
