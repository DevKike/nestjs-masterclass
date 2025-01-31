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
import { UserService } from './providers/user/users.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private readonly _userService: UserService) {}
  @Get('/:id?')
  @ApiOperation({
    summary: 'Fetch a list of registered users on the app',
  })
  @ApiResponse({
    status: 200,
    description: 'The list of registered users has been successfully fetched',
  })
  @ApiQuery({
    name: 'limit',
    type: 'number',
    required: false,
    description: 'The number of entries returned per query',
    example: 10,
  })
  @ApiQuery({
    name: 'page',
    type: 'number',
    required: false,
    description:
      'The position of the page number that you want the API to return',
    example: 1,
  })
  getUser(
    @Param() getUserParamsDTO: GetUserParamsDTO,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    return this._userService.findAll(getUserParamsDTO, limit, page);
  }

  @Post()
  createUser(@Body() createUserDTO: CreateUserDTO) {
    console.log(createUserDTO instanceof CreateUserDTO);
    console.log(createUserDTO.getFullName());
    return this._userService.createUser(createUserDTO);
  }

  @Patch()
  patchUser(@Body() patchUserDTO: PatchUserDTO) {
    return patchUserDTO;
  }
}
