import { Controller, Get, Post, Body, UsePipes, ValidationPipe, Param, ParseIntPipe, Put, Delete, UploadedFile } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    getUsers(): Promise<User[]> {
        return this.usersService.getUsers();
    }

    @Get('/:id')
    getUserById(@Param('id', ParseIntPipe) id: number): Promise<User> {
        return this.usersService.getUserById(id);
    }

    @Post('/create')
    @UsePipes(ValidationPipe)
    async createUsers(@Body() body,
    @UploadedFile() file ) {
        console.log("alo alo")
        const body1 = await body;
        console.log(body1, file)
        // return this.usersService.createUser(createUserDto);
    }

    @Put('/:id')
    updateUser(
        @Param('id', ParseIntPipe) id: number,
        @Body() user: UpdateUserDto
    ): Promise<User> {
        console.log(user)
        return this.usersService.updateUser(id, user);
    }

    @Delete('/:id')
    deleteUser(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.usersService.deleteUser(id);
    }
}
