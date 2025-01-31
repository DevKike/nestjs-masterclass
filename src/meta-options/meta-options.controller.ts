import { Body, Controller, Post } from '@nestjs/common';
import { CreatePostMetaOptionsDTO } from './dtos/create-post-meta-options.dto';
import { MetaOptionsService } from './providers/meta-options.service';

@Controller('meta-options')
export class MetaOptionsController {
  constructor(
    /**
     * Inject MetaOptionsService
     */
    private readonly _metaOptionsService: MetaOptionsService,
  ) {}

  @Post('/')
  async create(@Body() createPostMetaOptionsDTO: CreatePostMetaOptionsDTO) {
    return await this._metaOptionsService.create(createPostMetaOptionsDTO);
  }
}
