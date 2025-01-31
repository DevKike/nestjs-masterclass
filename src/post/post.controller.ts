import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { PostService } from './providers/post/post.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDTO } from './dtos/create-post.dto';
import { PatchPostDTO } from './dtos/patch-post.dto';

@Controller('post')
@ApiTags('Post')
export class PostController {
  constructor(private readonly _postService: PostService) {}

  @Get('/:userId')
  getPost(@Param('userId', ParseIntPipe) userId: string) {
    return this._postService.findAll(userId);
  }

  @ApiOperation({
    summary: 'Create a post',
  })
  @ApiResponse({
    status: 201,
    description: 'You get a 201 response if the post is created successfully',
  })
  @Post('/')
  createPost(@Body() post: CreatePostDTO) {
    return this._postService.create(post);
  }

  @ApiOperation({
    summary: 'Update a post',
  })
  @ApiResponse({
    status: 200,
    description: 'You get a 200 response if the post is updated successfully',
  })
  @Patch()
  updatePost(@Body() patchPostDTO: PatchPostDTO) {
    console.log(patchPostDTO);
  }
}
