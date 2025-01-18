import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get('/:id')
  getUser(@Param('id') id: any, @Query('limit') limit: any) {
    console.log(id);
    console.log(limit);
    return 'You sent a get request to user endpoint';
  }

  @Post()
  createUser(@Body('name') name: any) {
    console.log(name);
    return 'You sent a post request to user endpoint';
  }
}
