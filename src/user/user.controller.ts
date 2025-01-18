import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDTO } from './dtos/create-user.dto';
import { GetUserParamsDTO } from './dtos/get-user-params.dto';

@Controller('user')
export class UserController {
  @Get('/:id')
  getUser(
    @Param() getUserParamsDTO: GetUserParamsDTO,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log('🚀 ~ UserController ~ getUserParamsDTO:', getUserParamsDTO);
    return 'You sent a get request to user endpoint';
  }

  @Post()
  createUser(@Body() createUserDTO: CreateUserDTO) {
    console.log(createUserDTO instanceof CreateUserDTO);
    console.log(createUserDTO.getFullName());
    return 'You sent a post request to user endpoint';
  }
}
