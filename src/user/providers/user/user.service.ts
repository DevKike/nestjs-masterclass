import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/providers/auth/auth.service';
import { GetUserParamsDTO } from 'src/user/dtos/get-user-params.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly _authService: AuthService,
  ) {}

  findAll(getUserParamsDTO: GetUserParamsDTO, limit: number, page: number) {
    const isAuth = this._authService.isAuth();
    console.log(isAuth);
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

  findOneById(id: string) {
    return {
      id: id,
      firstName: 'John',
      email: 'john@doe.com',
    };
  }
}
