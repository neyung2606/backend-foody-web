import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Delete,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ObjectID } from 'typeorm';
// import { AuthService } from '../auth/auth.service';
import { Auth } from 'src/auth/auth.decorator';

@Controller()
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('users')
  @Auth('USER_READ')
  getUsers(@Query('username') username: string): Promise<User[]> {
    return this.usersService.getUsers(username);
  }

  @Get('users/:id')
  @Auth('USER_READ')
  getUserById(@Param('id') id: ObjectID): Promise<User> {
    return this.usersService.getUserById(id);
  }

  @Post('auth/register')
  createUsers(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Post('/auth/login')
  login(@Body() data): Promise<any> {
    return this.usersService.login(data);
  }

  @Put('users/:id')
  updateUser(
    @Param('id') id: ObjectID,
    @Body() user: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.updateUser(id, user);
  }

  @Delete('users/:id')
  // @UseGuards(AuthService)
  deleteUser(@Param('id') id: ObjectID): Promise<void> {
    return this.usersService.deleteUser(id);
  }
}
