import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/posts.module';
import { User } from './users/user.entity';
import { Post } from './posts/post.entity';

const IMPORTS = [
  UsersModule,
  PostsModule,
  AuthModule,
  TypeOrmModule.forRootAsync({
    imports: [],
    inject: [],
    useFactory: () => ({
      type: 'postgres',
      entities: [User, Post],
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
  imports: [...IMPORTS],
  controllers: [...CONTROLLERS],
  providers: [...PROVIDERS],
})
export class AppModule {}
