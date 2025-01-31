import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/posts.module';
import { User } from './users/user.entity';
import { Post } from './posts/post.entity';
import { TagsModule } from './tags/tags.module';
import { MetaOptionsModule } from './meta-options/meta-options.module';

const IMPORTS = [
  UsersModule,
  PostsModule,
  AuthModule,
  TypeOrmModule.forRootAsync({
    imports: [],
    inject: [],
    useFactory: () => ({
      type: 'postgres',
      // entities: [User, Post],
      autoLoadEntities: true,
      synchronize: true,
      port: 5432,
      username: 'postgres',
      password: 'Alvaro1516!',
      host: 'localhost',
      database: 'nestjs-blog',
    }),
  }),
];
const CONTROLLERS = [AppController];
const PROVIDERS = [AppService];
@Module({
  imports: [...IMPORTS, TagsModule, MetaOptionsModule],
  controllers: [...CONTROLLERS],
  providers: [...PROVIDERS],
})
export class AppModule {}
