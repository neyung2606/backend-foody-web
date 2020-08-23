import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserDto } from './dto/update-user.dto';

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

    async updateUser(id: number, user: UpdateUserDto): Promise<User> {
        const found: User = await this.getUserById(id);
        return this.userRepository.updateUser(found, user);
    }

    async deleteUser(id: number): Promise<void> {
        const result = await this.userRepository.delete(id);

        if (result.affected === 0) {
            throw new NotFoundException(`Task with ID "${id}" not found!!`);
        }
    }
}
