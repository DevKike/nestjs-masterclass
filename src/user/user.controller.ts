import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get('/:id')
  getUser(@Param() params: any, @Query() query: any) {
    console.log(`Params: ${JSON.stringify(params)}`);
    console.log(`Query params: ${JSON.stringify(query)}`);
    return 'You sent a get request to user endpoint';
  }

  @Post()
  createUser(@Body() req: any) {
    console.log('🚀 ~ UserController ~ createUser ~ req:', req);
    return 'You sent a post request to user endpoint';
  }
}
