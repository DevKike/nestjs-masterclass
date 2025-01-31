import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/providers/auth/auth.service';
import { GetUserParamsDTO } from 'src/user/dtos/get-user-params.dto';

/**
 * Class to connect to Users table and perform business operations
 * @param {AuthService} _authService - The instance of the AuthService
 */
@Injectable()
export class UserService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly _authService: AuthService,
  ) {}

  /**
   * The method to get all users to the database
   */
  findAll(GetUserParamsDTO: GetUserParamsDTO, limit: number, page: number) {
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

  /**
   * The method to get a user by id
   */
  findOneById(id: string) {
    return {
      id: id,
      firstName: 'John',
      email: 'john@doe.com',
    };
  }
}
