import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { PostService } from './providers/post/post.service';
import { ApiTags } from '@nestjs/swagger';
import { CreatePostDTO } from './dtos/create-post.dto';

@Controller('post')
@ApiTags('Post')
export class PostController {
  constructor(private readonly _postService: PostService) {}

  @Get('/:userId')
  getPost(@Param('userId', ParseIntPipe) userId: string) {
    return this._postService.findAll(userId);
  }

  @Post('/')
  createPost(@Body() post: CreatePostDTO) {
    return this._postService.create(post);
  }
}
