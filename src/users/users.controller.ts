import { Controller, Get, Post, Body, UsePipes, ValidationPipe, Param, ParseIntPipe, Delete, Patch, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ObjectID } from 'typeorm';
import { AuthService } from 'src/auth/auth.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    getUsers(): Promise<User[]> {
        return this.usersService.getUsers();
    }

    @Get('/:id')
    @UseGuards(AuthService)
    getUserById(@Param('id') id: ObjectID): Promise<User> {
        return this.usersService.getUserById(id);
    } 

    @Post('/create')
    @UsePipes(ValidationPipe)
    createUsers(@Body() createUserDto: CreateUserDto) {
        return this.usersService.createUser(createUserDto);
    }

    @Post('/auth/login')
    login(@Body() data): Promise<String> {
        return this.usersService.login(data);
    }

    @Patch('/:id')
    updateUser(
        @Param('id') id: ObjectID,
        @Body() user: UpdateUserDto
    ): Promise<User> {
        console.log(user)
        return this.usersService.updateUser(id, user);
    }

    @Delete('/:id')
    deleteUser(@Param('id') id: ObjectID): Promise<void> {
        return this.usersService.deleteUser(id);
    }
}
