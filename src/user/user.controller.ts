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

@Controller('user')
export class UserController {
  @Get('/:id')
  getUser(
    @Param('id', ParseIntPipe) id: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log(limit);
    console.log(page);
    return 'You sent a get request to user endpoint';
  }

  @Post()
  createUser(@Body('name') name: any) {
    console.log(name);
    return 'You sent a post request to user endpoint';
  }
}
