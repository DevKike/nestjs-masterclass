import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/providers/auth/auth.service';
import { CreateUserDTO } from 'src/user/dtos/create-user.dto';
import { GetUserParamsDTO } from 'src/user/dtos/get-user-params.dto';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';

/**
 * Class to connect to Users table and perform business operations
 * @param {AuthService} _authService - The instance of the AuthService
 */
@Injectable()
export class UserService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly _authService: AuthService,
    /**
     * Injecting usersRepository
     */
    @InjectRepository(User)
    private readonly _userRepository: Repository<User>,
  ) {}

  async createUser(createUserDTO: CreateUserDTO) {
    //Check is user already exists with same email
    const existingUser = await this._userRepository.findOne({
      where: { email: createUserDTO.email },
    });

    //Handle exception

    //Create a new user
    let newUser = this._userRepository.create(createUserDTO);
    newUser = await this._userRepository.save(newUser);

    return newUser;
  }

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
