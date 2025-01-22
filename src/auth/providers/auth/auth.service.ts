import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/providers/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly _userService: UserService,
  ) {}

  login(email: string, password: string, id: string) {
    const user = this._userService.findOneById(id);

    return 'SAMPLE_TOKEN';
  }

  isAuth(): boolean {
    return true;
  }
}
