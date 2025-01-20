import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/providers/user/user.service';

@Injectable()
export class PostService {
  constructor(private readonly _userService: UserService) {}

  findAll(userId: string) {
    const user = this._userService.findOneById(userId);
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
}
