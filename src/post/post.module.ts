import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './providers/post/post.service';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [PostController],
  providers: [PostService],
  imports: [UserModule],
})
export class PostModule {}
