import { Injectable } from '@nestjs/common';
import { CreatePostMetaOptionsDTO } from '../dtos/create-post-meta-options.dto';
import { Repository } from 'typeorm';
import { MetaOption } from '../meta-option.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MetaOptionsService {
  constructor(
    /**
     * Inject the post meta options repository
     */
    @InjectRepository(MetaOption)
    private readonly _metaOptionsRepository: Repository<MetaOption>,
  ) {}

  async create(createPostMetaOptionsDTO: CreatePostMetaOptionsDTO) {
    const metaOption = this._metaOptionsRepository.create(
      createPostMetaOptionsDTO,
    );

    return await this._metaOptionsRepository.save(metaOption);
  }
}
