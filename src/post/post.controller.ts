import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PostService } from './providers/post/post.service';

@Controller('post')
export class PostController {
  constructor(private readonly _postService: PostService) {}

  @Get('/:userId')
  getPost(@Param('userId', ParseIntPipe) userId: string) {
    return this._postService.findAll(userId);
  }
}
