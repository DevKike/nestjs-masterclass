import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PostService } from './providers/post/post.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('post')
@ApiTags('Post')
export class PostController {
  constructor(private readonly _postService: PostService) {}

  @Get('/:userId')
  getPost(@Param('userId', ParseIntPipe) userId: string) {
    return this._postService.findAll(userId);
  }
}
