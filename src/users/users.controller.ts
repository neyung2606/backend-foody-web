import { Controller, Get, Post, Body, UsePipes, ValidationPipe, Param, ParseIntPipe, Delete, Patch, UseGuards } from '@nestjs/common';
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
    getUsers(): Promise<User[]> {
        return this.usersService.getUsers();
    }

    @Get('users/:id')
    @UseGuards(AuthService)
    getUserById(@Param('id') id: ObjectID): Promise<User> {
        return this.usersService.getUserById(id);
    } 

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
        console.log(user)
        return this.usersService.updateUser(id, user);
    }

    @Delete('users/:id')
    @UseGuards(AuthService)
    deleteUser(@Param('id') id: ObjectID): Promise<void> {
        return this.usersService.deleteUser(id);
    }
}
