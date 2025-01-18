import { Injectable } from '@nestjs/common';
import { GetUserParamsDTO } from 'src/user/dtos/get-user-params.dto';

@Injectable()
export class UserService {
  findAll(getUserParamsDTO: GetUserParamsDTO, limit: number, page: number) {
    return [
      {
        firstName: 'John',
        email: 'john@doe.com',
      },
      {
        firstName: 'Jane',
        email: 'jane@doe.com',
      },
    ];
  }

  findOneById(id: number) {
    return {
      id: id,
      firstName: 'John',
      email: 'john@doe.com',
    };
  }
}
