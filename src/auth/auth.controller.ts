import { Controller } from '@nestjs/common';
import { AuthService } from './providers/auth/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly _authService: AuthService) {}
}
