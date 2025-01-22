import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDTO } from './dtos/create-user.dto';
import { GetUserParamsDTO } from './dtos/get-user-params.dto';
import { PatchUserDTO } from './dtos/patch-user.dto';
import { UserService } from './providers/user/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly _userService: UserService) {}
  @Get('/:id')
  getUser(
    @Param() getUserParamsDTO: GetUserParamsDTO,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    return this._userService.findAll(getUserParamsDTO, limit, page);
    // return this._userService.findOneById('1234');
  }

  @Post()
  createUser(@Body() createUserDTO: CreateUserDTO) {
    console.log(createUserDTO instanceof CreateUserDTO);
    console.log(createUserDTO.getFullName());
    return 'You sent a post request to user endpoint';
  }

  @Patch()
  patchUser(@Body() patchUserDTO: PatchUserDTO) {
    return patchUserDTO;
  }
}
