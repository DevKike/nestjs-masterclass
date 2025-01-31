import { Injectable } from '@nestjs/common';
import { CreatePostDTO } from 'src/posts/dtos/create-post.dto';
import { UsersService } from 'src/users/providers/users/users.service';

@Injectable()
export class PostsService {
  constructor(private readonly _usersService: UsersService) {}

  findAll(userId: string) {
    const user = this._usersService.findOneById(userId);
    return [
      {
        user: user,
        title: 'Test title',
        content: 'Test content',
      },
      {
        user: user,
        title: 'Test title 2',
        content: 'Test content 2',
      },
    ];
  }

  create(post: CreatePostDTO) {
    return 'Post created ' + JSON.stringify(post);
  }
}
