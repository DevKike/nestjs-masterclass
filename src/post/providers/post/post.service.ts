import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
  findAll(userId: string) {
    console.log('🚀 ~ PostService ~ findAll ~ userId:', userId);
    return [
      {
        title: 'Test title',
        content: 'Test content',
      },
      {
        title: 'Test title 2',
        content: 'Test content 2',
      },
    ];
  }
}
