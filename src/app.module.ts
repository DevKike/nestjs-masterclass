import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';

const IMPORTS = [
  UserModule,
  PostModule,
  AuthModule,
  TypeOrmModule.forRootAsync({
    imports: [],
    inject: [],
    useFactory: () => ({
      type: 'postgres',
      entities: [User],
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
