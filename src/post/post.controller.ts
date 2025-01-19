import { Body, Controller, Post } from '@nestjs/common';
import { PostService } from './providers/post/post.service';
import { CreatePostDTO } from './dtos/create-post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly _postService: PostService) {}
  @Post()
  createPost(@Body() createPostDTO: CreatePostDTO) {
    return this._postService.createPost(createPostDTO);
  }
}
