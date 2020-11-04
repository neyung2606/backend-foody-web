import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Param,
  Query,
  Delete,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ObjectID } from 'typeorm';
import { AuthService } from '../auth/auth.service';
import { Auth } from 'src/auth/auth.decorator';

@Controller()
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('users')
  @UseGuards(AuthService)
  getUsers(@Query('username') username: string): Promise<User[]> {
    return this.usersService.getUsers(username);
  }

  @Get('users/:id')
  @UseGuards(AuthService)
  getUserById(@Param('id') id: ObjectID): Promise<User> {
    console.log('bb');
    return this.usersService.getUserById(id);
  }

  @Post('auth/register')
  @UsePipes(ValidationPipe)
  createUsers(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Post('/auth/login')
  @Auth('LOGIN')
  login(@Body() data): Promise<any> {
    return this.usersService.login(data);
  }

  @Patch('users/:id')
  @UseGuards(AuthService)
  updateUser(
    @Param('id') id: ObjectID,
    @Body() user: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.updateUser(id, user);
  }

<<<<<<< HEAD
  @Delete('users/:id')
  @UseGuards(AuthService)
  deleteUser(@Param('id') id: ObjectID): Promise<void> {
    return this.usersService.deleteUser(id);
  }
=======
    @Put('users/:id')
    @UseGuards(AuthService)
    updateUser(
        @Param('id') id: ObjectID,
        @Body() user: UpdateUserDto
    ): Promise<User> {
        return this.usersService.updateUser(id, user);
    }



    @Delete('users/:id')
    @UseGuards(AuthService)
    deleteUser(@Param('id') id: ObjectID): Promise<void> {
        return this.usersService.deleteUser(id);
    }
>>>>>>> 58c68c26bf80c1905f854bd2617f01833c9f12c3
}
