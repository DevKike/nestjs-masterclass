import { Injectable } from '@nestjs/common';
import { CreatePostDTO } from 'src/post/dtos/create-post.dto';

@Injectable()
export class PostService {
  createPost(body: CreatePostDTO) {
    console.log(body);
    return 'Post created';
  }

  findAll(userId: string) {
    console.log(userId);
    return 'All posts were obtained with success!';
  }
}
