import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
    ) {}

    async getUsers(): Promise<User[]> {
        return this.userRepository.getUsers();
    }

    async getUserById(id: number): Promise<User> {
        const user = this.userRepository.findOne(id);

        if (!user) {
            throw new NotFoundException(`User with ${id} not found!!`)
        }

        return user;
    }

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        return this.userRepository.createUser(createUserDto);
    }
}
