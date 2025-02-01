import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';
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
    /**
     * Inject the meta options repository
     */
    @InjectRepository(MetaOption)
    private readonly _metaOptionsRepository: Repository<MetaOption>,
  ) {}

  async create(@Body() createPostDTO: CreatePostDTO) {
    const post = this._postsRepository.create(createPostDTO);

    return await this._postsRepository.save(post);
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
}
