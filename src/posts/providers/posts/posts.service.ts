import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDTO } from 'src/posts/dtos/create-post.dto';
import { Post } from 'src/posts/post.entity';
import { UsersService } from 'src/users/providers/users/users.service';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    private readonly _usersService: UsersService,
    /**
     * Inject the Post repository
     */
    @InjectRepository(Post)
    private readonly _postsRepository: Repository<Post>,
  ) {}

  async createPost(createPostDTO: CreatePostDTO) {
    let newPost = this._postsRepository.create(createPostDTO);
    newPost = await this._postsRepository.save(newPost);

    return newPost;
  }

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
