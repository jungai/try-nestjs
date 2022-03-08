import { Controller, Get, Post, HttpCode, Param, Body } from '@nestjs/common';
import { CreateUserDto } from './users.dto';
import { User, UsersService } from './users.service';

// Route path => /users
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @HttpCode(200)
  async findAllUsers(): Promise<User[]> {
    // return [
    //   { id: 1, name: `John, Ju secret ${req.query.name || 'IDK'}` },
    //   { id: 2, name: 'Jane' },
    // ];
    // return 'this api should get all users';

    // res.status(HttpStatus.OK).send('this api should get all users');
    return this.usersService.findAllUsers();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `this api get user by id ${id}`;
  }

  @Post()
  @HttpCode(201)
  createUser(@Body() createUserDto: CreateUserDto) {
    // return `this api should create a new user name ${createUserDto.name}`;
    this.usersService.create(createUserDto);
  }
}
