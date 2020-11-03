<<<<<<< HEAD
import { Controller, Get, Post, Body, UsePipes, ValidationPipe, Param, Delete, Patch, UseGuards, Query } from '@nestjs/common';
=======
import { Controller, Get, Post, Body, UsePipes, ValidationPipe, Param, Query, Delete, Patch, UseGuards } from '@nestjs/common';
>>>>>>> 6bb2976f767e123749e60257365472de71b4005a
import { UsersService } from './users.service';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ObjectID } from 'typeorm';
import { AuthService } from '../auth/auth.service';

@Controller()
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get("users")
    @UseGuards(AuthService)
    getUsers(@Query('username') username: string): Promise<User[]> {
        return this.usersService.getUsers(username);
    }


    @Get('users/:id')
    @UseGuards(AuthService)
    getUserById(@Param('id') id: ObjectID): Promise<User> {
        console.log("bb")
        return this.usersService.getUserById(id);
    }

    // @Get('users?username:username')
    // @UseGuards(AuthService)
    // getUserByUsername(@Query('username') username: string): Promise<User> {
    //     console.log("aa")
    //     return this.usersService.getUserByUsername(username);
    // }

    @Post('auth/register')
    
    @UsePipes(ValidationPipe)
    createUsers(@Body() createUserDto: CreateUserDto) {
        return this.usersService.createUser(createUserDto);
    }

    @Post('/auth/login')
    login(@Body() data): Promise<any> {
        return this.usersService.login(data);
    }

    @Patch('users/:id')
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
}
