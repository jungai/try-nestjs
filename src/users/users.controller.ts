import {
  Controller,
  Get,
  Post,
  HttpCode,
  Param,
  Body,
  HttpStatus,
  Res,
} from '@nestjs/common';
import type { Response } from 'express';
import { CreateUserDto } from './users.dto';

// Route path => /users
@Controller('users')
export class UsersController {
  @Get()
  //   getUsers(@Req() req: Request) {
  async findAllUsers(@Res() res: Response): Promise<any> {
    // return [
    //   { id: 1, name: `John, Ju secret ${req.query.name || 'IDK'}` },
    //   { id: 2, name: 'Jane' },
    // ];
    // return 'this api should get all users';

    res.status(HttpStatus.OK).send('this api should get all users');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `this api get user by id ${id}`;
  }

  @Post()
  @HttpCode(201)
  createUser(@Body() createUserDto: CreateUserDto) {
    return `this api should create a new user name ${createUserDto.name}`;
  }
}
