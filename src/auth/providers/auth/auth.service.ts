import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly _usersService: UsersService,
  ) {}

  login(email: string, password: string, id: string) {
    const user = this._usersService.findOneById(id);

    return 'SAMPLE_TOKEN';
  }

  isAuth(): boolean {
    return true;
  }
}
